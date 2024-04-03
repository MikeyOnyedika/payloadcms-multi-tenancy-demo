"use client";
import VideoItem from "./components/VideoItem";
import { useEffect, useState } from "react";

const videos = [
  {
    id: "lkdasflaksdf",
    name: "video 1.mp4",
    link: "/videocache/videos/video1.mp4",
  },
  {
    id: "lkas0292i3lksd",
    name: "flight to andromeda.mp4",
    link: "/videocache/videos/video1.mp4",
  },
  {
    id: "aksdfioweklfns",
    name: "when johnny refused to pay his taxes.mp4",
    link: "/videocache/videos/johnny_pays_no_tax.mp4",
  },
];

export default function Videos() {
  const [videosMarkedForDelete, setVideosMarkedForDelete] = useState<
    typeof videos
  >([]);

  useEffect(() => {
    console.log("videos to delete: ", videosMarkedForDelete);
  }, [videosMarkedForDelete]);

  function mark(video: (typeof videos)[number]) {
    setVideosMarkedForDelete((prev) => [...prev, video]);
  }

  function unmark(id: string) {
    const newVideos = videosMarkedForDelete.filter((video) => video.id !== id);
    setVideosMarkedForDelete(newVideos);
  }

  function deleteVideos(){
    console.log("deleting videos...")
  }

  return (
    <section className="p-2 md:p-4 flex flex-col gap-2">
      <section className="flex justify-end">
        <button
          type="button"
          onClick={deleteVideos}
          className={`text-red-500 border-2 border-red-500 rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-colors duration-300 ${
            videosMarkedForDelete.length === 0 && "invisible"
          }`}
        >
          Delete ({videosMarkedForDelete.length})
        </button>
      </section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoItem
            key={video.id}
            video={video}
            markForDelete={mark}
            unmarkForDelete={unmark}
          />
        ))}
      </ul>
    </section>
  );
}
