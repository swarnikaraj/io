import { Link } from "react-router-dom";
import { saveData,loadData } from "../utils/localstore"
import { useDispatch } from "react-redux";
import { loginfailure, loginsuccess } from "../store/auth/action"
import { useEffect, useState } from "react";
export const Header = () => {
   const user=loadData("user")
   const [userName,setUserName]=useState("")

    useEffect(()=>{
         setUserName(user)
    },[user])

   const dispatch = useDispatch();
  function logOut(){
    alert("Logging out");
    setUserName("")
    saveData("user","")
     
  }
    return (
      <>
        <div className="bg-[rgba(18,18,18)] h-20 grid grid-cols-3  text-gray-200 ">

    <div className="m-auto">
       
        <img src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="imdb"/>
      
        
    </div>

    <div className="m-auto w-1/2">
        <input placeholder="search Movie"className="w-full px-4 py-4"/>
    </div>

    <div className="m-auto">
    
        {user?<div className="border-2 rounded-full px-3 py-4"><span>{userName}</span><span className="px-4" onClick={logOut}>Sign Out</span></div>: <Link to="/login"> <span>Sign in</span></Link>}
       
    </div>


        </div>
      </>
    );
  };
  