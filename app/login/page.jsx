import Link from "next/link";
import Carousel from "../Components/Carousel";


export default function login() {
  return (
   <div>
    <Carousel />
    <div id="signup" className="h-screen">
        <div className="flex flex-col items-center bg-white max-w-sm mx-auto mt-12 py-6 rounded-lg">
          <h2 className="font-bold text-2xl text-slate-500 my-8">Login</h2>
          <form className="flex flex-col items-center w-full">
              <input type="text" placeholder="Email"/>
              <input type="text" placeholder="Password"/>

              <button type="submit" className="text-white bg-blue-400 px-5 py-1 mt-3 mb-14 rounded-sm">Login</button>

              <div className=" text-slate-500 text-sm my-6">
                <button htmlFor="agree">Forgot password?</button>
              </div>
              
              <Link href="sing_up">Not registred? <span className="text-blue-400">Create an account</span></Link>
          </form>
        </div>
    </div>
   </div>
  );
}
