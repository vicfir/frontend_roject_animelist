import Image from "next/image";
import YoutubeEmbed from "u@/app/Components/YoutubeEmbedndefined";


async function getAnimeDatas(filter) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${filter}`);
  const data = await res.json();
  const result = data.data;
  return result
}

export default async function page({ params }) {
    const animeId = params.animeId;
    const animDatas = await getAnimeDatas(`${animeId}`);
    // console.log(animDatas);
  return (
    <div className="max-w-6xl mt-12">
        <div className="flex w-full">
            <div className="w-[20%] ml-10">
                <Image src={animDatas.images.webp.large_image_url} width={100} height={100} alt="anime image" className="w-full"/>
            </div>
            <div className="w-[80%] px-10">
                <div>
                    <h1>{animDatas.title}</h1>
                    <p>{animDatas.synopsis}</p>
                </div>

                {/* <div>
                    <h2>Characters</h2>
                </div> */}

                <div>
                    <h2>Triler</h2>
                    <YoutubeEmbed embedId={animDatas.trailer.embed_url} />
                </div>
            </div>
        </div>
    </div>
  )
}

