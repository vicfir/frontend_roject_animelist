import Image from "next/image";

async function getAnimes() {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`);
    const data = await res.json();
    const result = data.data;
    // console.log(result[0].title);
  return result

}

export default async function Animes() {
    const animes = await getAnimes();
  return (
    <div>
        <h2>Trending now</h2>
        {animes && animes.map((anime, index) => index < 5 &&(
            <div key={anime.mal_id}>
                <p>{anime.title}</p>
                <Image src={anime.images.webp.image_url} width={200} height={300}/>
            </div>
        ))}

        <h2>Upcoming Next Season</h2>

        <h2>All Time Popular</h2>

        <h2>Top 100 Anime</h2>
    </div>
  )
}
