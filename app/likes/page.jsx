"use client"
import Link from 'next/link';
import Image from "next/image";
import { RiEmotionHappyLine } from "react-icons/ri";
import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";
import { deleteFavorite } from 'u@/redux/features/signupSlicendefined';


async function getFav(filter) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${filter}`);
  const data = await res.json();
  const result = data.data;
  return result
}

export default function FavoritesPage() {

  const email = useAppSelector(state => state.loginReducer.email);
  const users = useAppSelector(state => state.signupReducer);
  const [favorites, setFavorites] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchFavorites() {
      const index = users.findIndex((user) => user.email === email);
      if (index !== -1) {
        const favoriteData = await Promise.allSettled(users[index].favorite.map(animeId => getFav(animeId)));
        if (favoriteData.every(({ status }) => status === 'fulfilled')) {
          const animeData = favoriteData.map(({ value }) => value);
          setFavorites(animeData);
        }
      }
    }
    fetchFavorites();
  }, [email, users]);

  const handleDelete = (favorite) => {
    dispatch(deleteFavorite({ email, favorite }));
    setFavorites(prevFavorites => prevFavorites.filter(anime => anime.mal_id !== favorite));
  }

  return (
    <div className="max-w-6xl mt-12 min-h-screen mx-auto">
      <h1 className="font-bold text-2xl text-center text-slate-500 mb-3">Your likes</h1>
      <div>
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((anime) => 
            <Link href={`anime/${anime.mal_id}`} key={anime.mal_id} className="flex items-center max-w-6xl my-5">

              <div className="flex justify-between w-full bg-white shadow-md p-2 rounded-md">
                <div className="flex w-1/2 items-center">
                  <div className="">
                    <Image src={anime.images.webp.image_url} alt="anime image" width={45} height={45} className="rounded-sm mr-2"/>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-500">{anime.title}</p>
                    <div className="flex">
                      {anime.genres.map((genre) => (
                        <p className="mx-1 my-2 border rounded-xl px-2 text-sm text-slate-400 whitespace-nowrap flex flex-wrap">{genre.name.toLowerCase()}</p>
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
                    <button onClick={() => handleDelete(anime.mal_id)}>x</button>
                  </div>
                </div>
              </div>

            </Link>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
