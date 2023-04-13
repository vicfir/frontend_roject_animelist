import Image from "next/image";
import YoutubeEmbed from "u@/app/Components/YoutubeEmbedndefined";
import LikeBtn from "../../Components/LikeBtn"


async function getAnimeDatas(filter) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${filter}`);
  const data = await res.json();
  const result = data.data;
  return result
}

export default async function page({ params }) {
    const animeId = params.animeId;
    const animDatas = await getAnimeDatas(`${animeId}`);
    
  return (
    <div className="max-w-6xl mt-12">
        <div className="flex w-full">
            <div className="w-[20%] ml-10">
                <Image src={animDatas.images.webp.large_image_url} width={100} height={100} alt="anime image" className="w-full"/>
                <div className=" bg-white height-full mt-5 px-3 py-3 rounded-lg relative">
                    <LikeBtn animeId={animeId}/>
                    <div className="animeInfo">
                        <div>
                            <h4>Format</h4>
                            <p>{animDatas.type}</p>
                        </div>
                        <div>
                            <h4>Status</h4>
                            <p>{animDatas.status}</p>
                        </div>
                        <div>
                            <h4>Start Date</h4>
                            <p>{animDatas.aired.string.slice(0, 12)}</p>
                        </div>
                        <div>
                            <h4>Score</h4>
                            <p>{animDatas.score}</p>
                        </div>
                        <div>
                            <h4>Favorites</h4>
                            <p>{animDatas.favorites}</p>
                        </div>
                        <div>
                            <h4>Genres</h4>
                            {animDatas.genres.map((genre) => (
                                <p className="">{genre.name}</p>
                            ))}
                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] px-10">
                <div className="">
                    <h1 className="font-bold text-2xl text-slate-500 mb-3">{animDatas.title}</h1>
                    <p>{animDatas.synopsis}</p>
                </div>

                {/* <div>
                    <h2>Characters</h2>
                </div> */}

                <div className="mt-10">
                    <h2 className="font-bold text-xl text-slate-500 mb-3">Triler</h2>
                    <YoutubeEmbed embedId={animDatas.trailer.embed_url} />
                </div>
            </div>
        </div>
    </div>
  )
}

