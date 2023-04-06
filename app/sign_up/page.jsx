import Link from "next/link";

export default function SignUp() {
  return (
    <div id="signup" className="flex flex-col items-center bg-white max-w-sm mx-auto mt-12 py-6 rounded-lg">
        <h2 className="font-bold text-2xl text-slate-500 my-8">Sign up to AniList</h2>
        <form className="flex flex-col items-center w-full">
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password"/>
            <input type="text" placeholder="Confirm Pasword"/>

            <div className=" text-slate-500 text-sm my-6">
              <input type="checkbox" name="agree"/>
              <label htmlFor="agree">You agree to our terms of service</label>
            </div>

            <button type="submit" className="text-white bg-blue-400 px-5 py-1 mt-3 mb-14 rounded-sm">Sign up</button>
            
            <p className="flex justify-center text-slate-500">
              <Link href="login">Login</Link>
               • 
              <button>Resend Verification Email</button>
            </p>
        </form>
    </div>
  )
}
