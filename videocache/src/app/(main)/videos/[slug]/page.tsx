type Props = {
  params: {
    slug: string;
  };
};

export default function VideoWatch({ params }: Props) {
  const slug = decodeURIComponent(params.slug as string);
  return (
    <section className="w-full h-full p-4 flex flex-col gap-4 overflow-auto">
      <video className="w-full max-w-[80rem]  rounded-md" controls>
        <source src={"/showcase.webm"} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="max-w-[80rem]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          fugiat nesciunt nam illum aperiam quasi eaque, asperiores recusandae
          rem. Corrupti omnis ducimus nemo minus, similique alias sapiente
          voluptatem placeat. Id.
        </p>
      </div>
    </section>
  );
}
