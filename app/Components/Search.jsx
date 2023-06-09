"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

async function getGenre(filter) {
  const res = await fetch(`https://api.jikan.moe/v4/${filter}`);
  const data = await res.json();
  const result = data.data;
  return result;
}

export default function Search({ animeOrManga }) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchGenres() {
      try {
        const genres = await getGenre(`genres/${animeOrManga}`);
        setGenres(genres);
      } catch (error) {
        setError("An error occurred while fetching genres.");
      }
    }
    fetchGenres();
  }, [animeOrManga]);

  function handleSubmit(e) {
    setSearch(e.target.value);
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${animeOrManga}?search=${search}`);
  }

  return (
    <div className="searchBar my-12 flex justify-around max-w-6xl">
      <div className="searchFilter">
        <p>Search</p>
        <input type="search" placeholder="" value={search} onChange={handleSubmit} className="filterInput shadow-md"/>
      </div>

      <div className="searchFilter">
        <p>Genres</p>
        <div className="peer filterInput shadow-md">
          <input type="text" />
          <AiOutlineDown />
        </div>
        <div className="hidden peer-hover:flex hover:flex absolute z-10 dropDown overflow-auto h-40 bg-white flex-col shadow-md">
          {error ? (
            <p>{error}</p>
          ) : (
            genres.map((genre) => (
              <Link
                href={`search/${animeOrManga}?genres=${genre.mal_id}`}
                key={genre.mal_id}
              >
                {genre.name}
              </Link>
            ))
          )}
        </div>
      </div>
    

      <div className="searchFilter">
        <p>Year</p>
        <div className="peer filterInput shadow-md">
          <input type="text" />
          <AiOutlineDown />
        </div>
        <div className="hidden peer-hover:flex hover:flex absolute z-10 dropDown overflow-auto h-40 bg-white flex-col shadow-md">
          {Array(62)
            .fill()
            .map((_, index) => (
              <Link
                href={`search/${animeOrManga}?year=${2023 - index}`}
                key={index}
              >
                {2023 - index}
              </Link>
            ))}
        </div>
      </div>

      {/* <div className="searchFilter">
        <p>Season</p>
        <div className="filterInput shadow-md">
          <input type="text" />
          <AiOutlineDown />
        </div> 
        <div className="dropDown overflow-auto h-40 w-full bg-white flex flex-col shadow-md">
        
        </div>

      </div> */}

      <div className="searchFilter">
        <p>Airing Status</p>
        <div className="peer filterInput shadow-md">
          <input type="text" />
          <AiOutlineDown />
        </div>
        <div className="hidden peer-hover:flex hover:flex absolute z-10 dropDown bg-white flex-col shadow-md">
          <Link href={`search/${animeOrManga}?airing=airing`}>Airing</Link>
          <Link href={`search/${animeOrManga}?airing=upcoming`}>Upcoming</Link>
        </div>
      </div>
    </div>
  );
}


