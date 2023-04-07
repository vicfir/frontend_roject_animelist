import Image from "next/image";
import { RiEmotionHappyLine } from "react-icons/ri";
import Search from "./Search";

async function getAnimes(filter) {
  
  const res = await fetch(`https://api.jikan.moe/v4/${filter}`);
  const data = await res.json();
  const result = data.data;
  // console.log(result[0].title);
  return result

}

export default async function Animes() {
    const trending = await getAnimes("top/anime?filter=airing");
    const upcoming = await getAnimes("seasons/upcoming");
    const popular = await getAnimes("top/anime?filter=bypopularity");
    const top = await getAnimes("top/anime");

    const toMonth = (monthNumber) => {

      switch (monthNumber) {
        case "12": case "01": case "02":
          return("Winter");

        case "03": case "04": case "05":
          return("Spring");

        case "06": case "07": case "08":
          return("Summer");
          
        case "09": case "10": case "11":
          return("Autumn");
      
        default:
          break;
      }
    };

  return (
    <div className="max-w-6xl mx-auto">
      <Search />
        <div className="pSect">
          <h2>TRENDING NOW</h2>
          <div className="pRow">
            {trending && trending.map((anime, index) => index < 6 &&(
                <div key={anime.mal_id} className="pAff">
                    <div className="affImg">
                      <Image src={anime.images.webp.image_url} width={200} height={200}/>
                    </div>
                    <p className="affTitle">{anime.title}</p>
                </div>
            ))}
          </div>
        </div>

        <div className="pSect">
          <h2>UPCOMING NEXT SEASON</h2>
          <div className="pRow">
            {upcoming && upcoming.map((anime, index) => index < 6 &&(
                <div key={anime.mal_id} className="pAff">
                    <div className="affImg">
                      <Image src={anime.images.webp.image_url} width={200} height={200}/>
                    </div>
                    <p className="affTitle">{anime.title}</p>
                </div>
            ))}
          </div>
        </div>

        <div className="pSect">
          <h2>ALL TIME POPULAR</h2>
          <div className="pRow">
            {popular && popular.map((anime, index) => index < 6 &&(
                <div key={anime.mal_id} className="pAff">
                    <div className="affImg">
                      <Image src={anime.images.webp.image_url} width={200} height={200}/>
                    </div>
                    <p className="affTitle">{anime.title}</p>
                </div>
            ))}
          </div>
        </div>

        <div className="tSect">
          <h2 className="text-slate-500 font-bold">TOP 100 ANIME</h2>
          <div>
            {top && top.map((anime, index) => index < 10 &&(
              <div key={anime.mal_id} className="flex items-center max-w-6xl my-5">
                <p className="w-12 font-bold text-slate-500">#{index+1}</p>

                <div className="flex justify-between w-full bg-white shadow-md p-2 rounded-md">
                  <div className="flex w-1/2 items-center">
                    <div className="">
                      <Image src={anime.images.webp.image_url} width={45} height={45} className="rounded-sm mr-2"/>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-500">{anime.title}</p>
                      <div className="flex">
                        {anime.genres.map((genre) => (
                          <p className="mx-1 my-2 border rounded-xl px-2 text-sm text-slate-400">{genre.name.toLowerCase()}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 w-1/2 items-center">                   
                    <div className="flex">
                      <RiEmotionHappyLine className="text-green-400 mt-1 mr-1"/>
                      <div>
                        <p className="topB">{Math.round(anime.score*10)} %</p>
                        <p className="topL">{anime.members} users</p>
                      </div>
                    </div>
                    <div>
                      <p className="topB">{anime.type === "TV" ? anime.type + " Show" : anime.type}</p>
                      <p className="topL">{anime.episodes ? anime.type === "Movie" ? anime.duration : anime.episodes+` episodes` : anime.status} </p>
                    </div>
                    <div>
                      {/* <p className="topB">{toMonth(anime.aired.from.slice(5, 7))} {anime.aired.from.slice(0, 4)}</p> */}
                      <p className="topB">{toMonth(anime.aired.from.slice(5, 7))} {anime.aired.from.slice(0, 4)}</p>
                      <p className="topL">{anime.status === "Currently Airing" ? "Airing" : "Finished"}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
