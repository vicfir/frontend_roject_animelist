import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-15 w-full py-3 px-3 bg-indigo-950">      
        <div className="flex justify-between max-w-4xl items-center mx-auto text-white">
          <Link href="/">
              <Image src="logo.svg" alt="logo" width={50} height={50}/>
          </Link>
          <div className="flex w-[55%]">
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
            <div className="ml-12">
                <Link className="mr-3" href="login">Login</Link>
                <Link className="bg-blue-500 px-3 py-2 rounded-md font-semibold" href="sign_up">Sign Up</Link>
            </div>
          </div>
        </div>
    </nav>
  )
}

