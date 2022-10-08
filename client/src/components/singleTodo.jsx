import { Parentdiv } from "../styledComponents/parents"
import { Bluebtn } from "../styledComponents/buttons"
import { Link, useParams } from "react-router-dom"

import { useState ,useEffect} from "react"

export const Singletodo=()=>{

    const style={textDecoration:'none'}
   
   const {id}=useParams()
    const [item,setItem]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/todos/${id}`).then(d=>d.json()).then(d=>{setItem(d)})
    
        },[id])

return <>
    <h1>My React-redux Todo Application</h1>
    <Parentdiv>
    <div className='btns'><Bluebtn><Link to={"/"} style={style}>Home</Link></Bluebtn></div>
    
         <div>
             <p>{item.title}</p>
             <p>{item.description}</p>
             <p>{item.status? "Completed":"Not Completed"}</p>
         </div>
    


    </Parentdiv>


</>



}