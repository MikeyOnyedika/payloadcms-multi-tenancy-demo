"use client"
import { getVideo } from "@/app/lib";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../../contexts/UserProvider";

type Props = {
  params: {
    id: string;
  };
};

export default function VideoWatch({ params }: Props) {
  const id = decodeURIComponent(params.id as string);
  const userData = useUserContext();

  const { data, isFetching } = useQuery({
    queryKey: ["videocache__videos", id],
    queryFn: async () => await getVideo({ id }),
    enabled: userData != null
  });

  let content = <></>
  if (isFetching) {
    content = <div>Loading...</div>
  } else {
    if (data?.status === "success") {
      const video = data.data.video
      content = (
        <>
          <video className="w-full max-w-[80rem]  rounded-md" controls>
            <source src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${video.url}`} type="video/mp4" />
            Can&apos;t play video. Your browser does not support the video tag
          </video>
        </>
      )
    } else {
      content = <div>{data?.error}</div>
    }
  }

  return (
    <section className="w-full h-full p-4 flex flex-col gap-4 overflow-auto">
      {content}
    </section>
  );
}
