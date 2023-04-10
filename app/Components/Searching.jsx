import Search from "./Search";
import Image from "next/image";

async function getDatas(filter) {
  const res = await fetch(`https://api.jikan.moe/v4/${filter}`);
  const data = await res.json();
  const result = data.data;
  return result
}

export default async function Searching({ animeOrManga , search }) {
  const genre = await getDatas(`${animeOrManga}?genres=${search.genres}`);

  let year = [];
  const spring = await getDatas(`seasons/${search.year}/spring`);
  const winter = await getDatas(`seasons/${search.year}/winter`);
  const summer = await getDatas(`seasons/${search.year}/summer`);
  const fall = await getDatas(`seasons/${search.year}/fall`);
  if (spring) year = [ ...year, ...spring ];
  if (winter) year = [ ...year, ...winter ];
  if (summer) year = [ ...year, ...summer ];
  if (fall) year = [ ...year, ...fall ];

  const airing = await getDatas(`top/${animeOrManga}?filter=${search.airing}`);

  const searchTxt = await getDatas(`${animeOrManga}?q=${search.search}`);

  return (
    <div className="max-w-6xl mx-auto">
      <Search animeOrManga={animeOrManga}/>
      <div className="pSect">
        <div className="pRow">
          {search.hasOwnProperty("genres") && genre && genre.map((item) => (
            <div key={item.mal_id} className="pAff">
              <div className="affImg">
                <Image src={item.images.webp.image_url} alt="anime image" width={200} height={200}/>
              </div>
              <p className="affTitle">{item.title}</p>
            </div>
          ))}

          {search.hasOwnProperty("year") && year && year.map((item) => (
            <div key={item.mal_id} className="pAff">
              <div className="affImg">
                <Image src={item.images.webp.image_url} alt="anime image" width={200} height={200}/>
              </div>
              <p className="affTitle">{item.title}</p>
            </div>
          ))}

          {search.hasOwnProperty("airing") && airing && airing.map((item) => (
            <div key={item.mal_id} className="pAff">
              <div className="affImg">
                <Image src={item.images.webp.image_url} alt="anime image" width={200} height={200}/>
              </div>
              <p className="affTitle">{item.title}</p>
            </div>
          ))}

          {search.hasOwnProperty("search") && searchTxt && searchTxt.map((item) => (
            <div key={item.mal_id} className="pAff">
              <div className="affImg">
                <Image src={item.images.webp.image_url} alt="anime image" width={200} height={200}/>
              </div>
              <p className="affTitle">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
