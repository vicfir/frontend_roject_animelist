"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { setUser } from "u@/redux/features/signupSlicendefined";
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";

export default function SignUp() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const agree = event.target.agree.checked;

    if (email && name && password && password === confirmPassword && agree) {
      dispatch(setUser({ email, name, password }));
      router.push('/login')
    } else if (password !== confirmPassword) {
      alert("Difference between passwords")
    } else if (!email || !name || !password || !confirmPassword) {
      alert("Please fill out all fields")
    } else if (!agree) {
      alert("Please agree to our terms of service")
    }
  };

  return (
    <div id="signup" className="h-screen">
      {/* <p>{userEmail}</p> */}
        <div className="flex flex-col items-center bg-white max-w-sm mx-auto mt-12 py-6 rounded-lg">
          <h2 className="font-bold text-2xl text-slate-500 my-8">Sign up to AniList</h2>
          <form className="flex flex-col items-center w-full" onSubmit={handleSubmit} >
              <input type="text" name="email" placeholder="Email"/>
              <input type="text" name="name" placeholder="Username" />
              <input type="text" name="password" placeholder="Password"/>
              <input type="text" name="confirmPassword" placeholder="Confirm Pasword"/>

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
    </div>
  )
}
