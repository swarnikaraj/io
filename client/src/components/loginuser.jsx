
import { Greenbtn } from "../styledComponents/buttons"

import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState ,useEffect} from "react"
import { saveData,loadData } from "../utils/localstore"

import { useDispatch } from "react-redux"
import { loginfailure, loginsuccess } from "../store/auth/action"

export const Login=()=>{
    const navigate=useNavigate();
    const [form,setForm]=useState({});
    const dispatch=useDispatch()
  
  
   
   const handleChange=({target:{name,value}})=>{
       setForm({
           ...form,
           [name]:value
       })
   }
   

  const signIn=()=>{
   
    try{
        fetch(`http://localhost:2345/login`,{
        method:"POST",
        body:JSON.stringify(form), 
        headers:{"Content-Type":"application/json"}
        ,
        }).then(res=>res.json()).then(res=>{ dispatch(loginsuccess(res.token));
            saveData("user",res.user.name)
            console.log(res); navigate(-1)})
        
        }
        catch(e){console.log(e);dispatch(loginfailure(e))}   
        }
  
 


return <>
<div className="h-full  w-full py-6 px-4 text-gray-300">
            <div className="flex flex-col items-center justify-center">

            <div className="py-6"><img alt="imdb" src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png"/></div>
               
              <div className="w-96 h-96 border border-spacing-2 px-5 py-3">

              <h1 className="text-lg">Sign in</h1>
           
           

             <div className="text-left mt-2">
              <label>Email</label>
              <br/>
              <input className="focus-visible border-1 text-black" name="email"  onChange={handleChange}/>
              </div>

             <div className="text-left mt-2 mb-2">
              <label>Password</label>
              <br/>
              <input  className="focus-visible border-1 text-black" name="password"  onChange={handleChange}/>
              </div>
              <button className="bg-[#F2CD6F] px-5 py-2 w-40" onClick={signIn}>Sign in</button>

              <br/>
              <br/>
              <br/>

             <Link to="/register"><button className="bg-[#919191]">Create Your IMDB account</button></Link> 

              </div>
            </div>
        </div>



</>



}