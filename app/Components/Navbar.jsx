"use client"
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";
import { logout } from "u@/redux/features/loginSlicendefined";

export default function Navbar() {

  const dispatch = useAppDispatch();

  const acces = useAppSelector(state => state.loginReducer.acces);
  const email = useAppSelector(state => state.loginReducer.email);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="h-15 w-full py-3 px-3 bg-indigo-950">      
        <div className="max-w-4xl items-center mx-auto text-white flex justify-between">
          <Link href="/">
              <Image src="logo.svg" alt="logo" width={50} height={50}/>
          </Link>
          <div className="flex mr-12">

              <div className="relative">
                <Link href="search/anime" className="peer">Search</Link>
                <div className="hidden peer-hover:flex hover:flex flex-col absolute bg-white text-black">
                  <Link href="search/anime">Anime</Link>
                  <Link href="search/manga">Manga</Link>
                </div>
              </div>

              <p>Social</p>
              <p>Forum</p>
          </div>
          {acces ? 
            <div className="flex items-center">
              <p className="mr-3">Hello {email}</p>  
              <p onClick={handleLogout} className="cursor-pointer bg-blue-500 px-3 py-2 rounded-md font-semibold">Log out</p>
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

