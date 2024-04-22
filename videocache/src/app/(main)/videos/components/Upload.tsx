import { uploadVideo } from "@/app/lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

let uploadAbortController = new AbortController();

export default function Upload({ userId }: { userId: string }) {
    const fieldName = "fileUpload"
    const [file, setFile] = useState<File | null>(null);
    const allowedFileTypes = ["video/mp4", "video/x-matroska", ".mp4", ".mkv"]
    const allowedFileTypesString = allowedFileTypes.join(", ")
    const [uploadProgress, setUploadProgress] = useState(0);
    const queryClient = useQueryClient();

    const uploadMutation = useMutation({
        mutationKey: ["videocache__videos", "new"],
        mutationFn: async ({ file, userId, updateProgress }: {
            file: File, userId: string, updateProgress: Dispatch<SetStateAction<number>>
        }) => await uploadVideo({ video: file, updateProgress, userId, signal: uploadAbortController.signal }),
        onSuccess: () => {
            // make react-query refetch the list of videos
            queryClient.invalidateQueries({
                queryKey: ["videocache__videos"],
                exact: true
            })
        }
    });

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            // only accept files of allowed file type
            const file = e.target.files[0]
            const fileType = file.type
            if (allowedFileTypes.includes(fileType)) {
                setFile(file)
            } else {
                toast.error("Upload a valid video file");
            }
        }
    }

    function cancelUpload(e: MouseEvent<HTMLButtonElement>) {
        setFile(null);
        uploadAbortController.abort();
        uploadAbortController = new AbortController();
    }

    async function attemptUploadVideo() {
        // prevent triggering another upload of the same file while it's currently uploading
        if (uploadMutation.isPending) {
            toast.success("Already uploading video... please wait");
            return;
        };

        if (file) {
            const res = await uploadMutation.mutateAsync({ userId, updateProgress: setUploadProgress, file });
            if (res.status === "error") {
                toast.error("Failed to upload video");
            } else {
                setFile(null);
                toast.success("File Upload was successful!");
            }
        } else {
            toast.error("No video was selected for upload");
        }
    }

    return (
        <section className="flex items-center gap-2 w-full justify-end">
            {
                uploadMutation.isPending && (
                    <label className="flex items-center gap-1">
                        <span>{uploadProgress}%</span>
                        <progress max="100" value={uploadProgress} className="progress"></progress>
                    </label>
                )
            }
            <p className="line-clamp-1">{
                file ? (file.name) : ("Select a video to upload")
            }</p>
            <div>
                {
                    !file && (
                        <>
                            <input id={fieldName} type="file" className="hidden" onChange={handleOnChange} accept={allowedFileTypesString} />
                            <label
                                htmlFor={fieldName} className="rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white cursor-pointer"
                            >select file</label>
                        </>
                    )}
            </div>
            {
                file && (
                    <div className="flex gap-2">
                        <button type="submit" className="text-blue-500 hover:text-blue-800" onClick={attemptUploadVideo} disabled={uploadMutation.isPending}>upload</button>
                        <button type="button" className="text-red-500 border-red-500 px-2 border-2 rounded-md hover:text-red-800 hover:border-red-800"
                            onClick={cancelUpload}
                        >cancel</button>
                    </div>
                )
            }
        </section >
    )
}
