import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai"

async function getSearch(filter) {
    const res = await fetch(`https://api.jikan.moe/v4/${filter}`);
    const data = await res.json();
    const result = data.data;
    return result
}

export default async function Search() {
    const genres = await getSearch("genres/anime");

    return (
        <div className="flex ">
            <div>
                <p>Search</p>
                <input type="search" placeholder=""/>
            </div>

            <div>
                <p>Genres</p>
                <div>
                    <input />
                    <AiOutlineDown/>
                </div> 
                

                <div className="overflow-auto h-40 w-full bg-white flex flex-col">
                    {genres.map((genre) => (
                        <Link href={`search/anime?genres=${genre.name}`} key={genre.mal_id}>{genre.name}</Link>
                    ))}
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
