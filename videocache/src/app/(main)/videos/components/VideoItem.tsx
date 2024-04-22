import { IconContext } from "react-icons";
import { BsPlay as Play } from "react-icons/bs";
import Link from "next/link";
import { ChangeEvent } from "react";
import { Video } from "@/app/types";

type Props = {
  video: Video;
  markForDelete: (video: Video) => void;
  unmarkForDelete: (id: string) => void;
};

export default function VideoItem({
  video,
  markForDelete,
  unmarkForDelete,
}: Props) {
  function markVideo(e: ChangeEvent<HTMLInputElement>, video: Video) {
    if (e.target.checked) {
      markForDelete(video);
    } else {
      unmarkForDelete(video.id);
    }
  }

  return (
    <li className="flex flex-col rounded-md shadow-md h-[15rem] bg-gray-200">
      <Link href={`/videos/${video.id}`} className="flex flex-col relative h-full">
        <input
          type="checkbox"
          className="scale-[2] accent-blue-600 absolute top-5 left-5"
          onChange={(e) => markVideo(e, video)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <div className="flex justify-center items-center w-full h-full ">
          <IconContext.Provider
            value={{ className: "text-[4rem] text-gray-800" }}
          >
            <Play />
          </IconContext.Provider>
        </div>
      </Link>
      <div className="bg-blue-50 p-4 rounded-b-md">
        <h3 className="line-clamp-2 text-blue-500">{video.filename}</h3>
      </div>
    </li>
  );
}
