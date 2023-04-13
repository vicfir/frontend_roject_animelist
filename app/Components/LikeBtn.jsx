"use client"
import { AiFillHeart } from "react-icons/ai";
import { addFavorite } from "u@/redux/features/signupSlicendefined";
import { useAppDispatch, useAppSelector } from "u@/redux/hookndefined";

const LikeBtn = ({animeId}) => {
    const dispatch = useAppDispatch();
    const emailLog = useAppSelector(state => state.loginReducer.email);

  function handleFavorite() {
    const favorite = animeId;
    const email = emailLog;

    dispatch(addFavorite({ favorite, email }));
  }

  return (
    <button
      onClick={handleFavorite}
      className="bg-red-500 hover:bg-red-400 cursor-pointer w-10 py-3 rounded-lg mx-auto absolute right-0 top-0"
    >
      <AiFillHeart className="fill-white ml-3"/>
    </button>
  )
}

export default LikeBtn
