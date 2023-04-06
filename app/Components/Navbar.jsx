import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-15 w-full py-3 px-3 bg-indigo-950">      
        <div className="flex justify-between max-w-6xl items-center mx-auto text-white">
          <Link href="/">
              <Image src="logo.svg" alt="logo" width={50} height={50}/>
          </Link>
          <div className="flex ">
              <p>Search</p>
              <p>Social</p>
              <p>Forum</p>
          </div>
          <div>
              <Link className="mr-3" href="login">Login</Link>
              <Link className="bg-blue-500 px-3 py-2 rounded-md font-semibold" href="sign_up">Sign Up</Link>
          </div>
        </div>
    </nav>
  )
}
