"use client"
import Link from "next/link";
import Carousel from "../Components/Carousel";
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";
import { submit } from "u@/redux/features/loginSlicendefined";


export default function login() {

  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.signupReducer);
  const denied = useAppSelector(state => state.loginReducer.denied);
  const acces = useAppSelector(state => state.loginReducer.acces);

  const handleConnection = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(submit({email, password, users}));
  }


  return (
   <div className="h-screen">
    <Carousel />
    
    {acces ? <h2 className="text-center mt-64 text-3xl font-bold text-slate-500">Successful connection!</h2> :
    <div id="signup" className="h-screen">
      <div className="flex flex-col items-center bg-white max-w-sm mx-auto mt-12 py-6 rounded-lg">
        <h2 className="font-bold text-2xl text-slate-500 my-8">Login</h2>
        <form className="flex flex-col items-center w-full" onSubmit={handleConnection}>
            <input type="text" name="email" placeholder="Email"/>
            <input type="text" name="password" placeholder="Password"/>

            <button type="submit" className="text-white bg-blue-400 px-5 py-1 mt-3 mb-14 rounded-sm">Login</button>
            {denied ? <p className="text-center text-red-500">Connection error, try again</p> : null}

            <div className=" text-slate-500 text-sm my-6">
              <button htmlFor="agree">Forgot password?</button>
            </div>
            
            <Link href="sing_up">Not registred? <span className="text-blue-400">Create an account</span></Link>
        </form>
      </div>
    </div>
    }
   </div>
  );
}
