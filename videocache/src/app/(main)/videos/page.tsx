"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Upload from "./components/Upload";
import VideoItem from "./components/VideoItem";
import { useState } from "react";
import { deleteVideos, getVideos } from "@/app/lib";
import { useUserContext } from "../contexts/UserProvider";
import { toast } from "react-hot-toast"
import { Video } from "@/app/types";
import LoadingCircle from "@/app/components/LoadingCircle";

export default function Videos() {
  const userData = useUserContext();
  const userId = userData?.user.id as string
  const [videosMarkedForDelete, setVideosMarkedForDelete] = useState<Video[]>([]);
  const queryClient = useQueryClient();

  const { data: videosFetch, isFetching: isFetchingVideos } = useQuery({
    queryKey: ["videocache__videos"],
    queryFn: async () => await getVideos(userId),
    enabled: userData != null
  });

  const deleteVideosMutation = useMutation({
    mutationFn: async (ids: string[]) => await deleteVideos(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["videocache__videos"],
        exact: true
      });
    }
  });

  function mark(video: Video) {
    setVideosMarkedForDelete((prev) => [...prev, video]);
  }

  function unmark(id: string) {
    const newVideos = videosMarkedForDelete.filter((video) => video.id !== id);
    setVideosMarkedForDelete(newVideos);
  }

  async function attemptDeleteVideos() {
    const res = await deleteVideosMutation.mutateAsync(
      videosMarkedForDelete.map(vid => vid.id)
    );
    if (res.status === "success") {
      setVideosMarkedForDelete([]);
      toast.success("Video(s) successfully deleted!");
    } else {
      toast.error("Failed to delete video(s)");
    }
  }

  let videoListRender = <></>
  if (isFetchingVideos) {
    videoListRender = <div>Loading ...</div>
  } else {
    if (videosFetch?.status === "success") {
      const videos = videosFetch.data.videos
      if (videos.length > 0) {
        videoListRender = <ul className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            videos.map((video) => (
              <VideoItem
                key={video.id}
                video={video}
                markForDelete={mark}
                unmarkForDelete={unmark}
              />
            ))
          }
        </ul>
      } else {
        videoListRender = <div className="text-gray-500 text-center text-2xl w-full">
          <p>
            You don&apos;t have any videos yet.
          </p>
        </div>
      }
    } else {
      const errorMsg = videosFetch?.error;
      videoListRender = <div>{errorMsg}</div>
    }
  }

  return (
    <section className="p-2 md:p-4 flex flex-col gap-2 w-full  h-full overflow-auto">
      <Upload userId={userId} />
      <section className="flex justify-end w-full">
        {
          <button
            type="button"
            onClick={attemptDeleteVideos}
            className={`text-red-500 border-2 border-red-500 rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-colors duration-300 ${videosMarkedForDelete.length === 0 && "invisible"
              }`}
            disabled={deleteVideosMutation.isPending}
          >
            {
              deleteVideosMutation.isPending ? (
                <LoadingCircle />
              ) : (
                `Delete (${videosMarkedForDelete.length})`
              )
            }
          </button>
        }
      </section>
      {videoListRender}
    </section>
  );
}
