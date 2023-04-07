import { AiOutlineDown } from "react-icons/ai"

async function getSearch() {
    const res = await fetch(`https://api.jikan.moe/v4/genres/anime`);
    const data = await res.json();
    const result = data.data;
    return result
}

export default function Search() {
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
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
