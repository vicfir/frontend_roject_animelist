"use client"
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";
import { logout } from "u@/redux/features/loginSlicendefined";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillBookFill } from "react-icons/bs";

export default function Navbar() {

  const dispatch = useAppDispatch();

  const acces = useAppSelector(state => state.loginReducer.acces);
  const email = useAppSelector(state => state.loginReducer.email);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="h-15 w-full py-3 px-3 bg-indigo-950" id="navbar">      
        <div className="max-w-4xl items-center mx-auto text-white flex justify-between">
          <Link href="/">
              <Image src="logo.svg" alt="logo" width={50} height={50}/>
          </Link>
          <div className="flex">

              <div className="navLink relative">
                <Link href="search/anime" className="peer">Search</Link>
                <div className="dropDownNav hidden peer-hover:flex hover:flex flex-col absolute bg-white text-black rounded-lg">
                  <div className="flex items-center">
                    <BsFillPlayFill className="fill-slate-400 mr-3"/>
                    <Link href="search/anime">Anime</Link>
                  </div>
                  <div className="flex items-center">
                    <BsFillBookFill className="fill-slate-400 mr-3"/>
                    <Link href="search/manga">Manga</Link>
                  </div>
                </div>
              </div>

              <p  className="navLink">Social</p>
              <p  className="navLink">Forum</p>
          </div>
          {acces ? 
            <div>
              <div className="flex items-center">
                <p className="mr-3">Hello {email}</p>  
                <p onClick={handleLogout} className="cursor-pointer bg-blue-500 px-3 py-2 rounded-md font-semibold">Log out</p>
              </div>
              <Link href="likes" className="bg-red-500 hover:bg-red-400 cursor-pointer w-10 py-3 rounded-lg fixed right-0 bottom-3 mr-3">
                <AiFillHeart className="fill-white ml-3"/>
              </Link>
            </div>
          :
            <div className="">
              <Link className="mr-3" href="login">Login</Link>
              <Link className="bg-blue-500 px-3 py-2 rounded-md font-semibold" href="sign_up">Sign Up</Link>
            </div>
          }
        </div>
    </nav>
  )
}

