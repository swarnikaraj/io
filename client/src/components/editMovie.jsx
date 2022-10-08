
import { Bluebtn, Greenbtn } from "../styledComponents/buttons";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";


export const EditMovie = () => {
  const style = { textDecoration: "none" };
  const navigate=useNavigate();
  const [form, setForm] = useState({});
  const server_url="http://localhost:2345"

  const { id } = useParams();
  const { loading, error ,actors,producers ,token} = useSelector((state) => ({
    loading: state.app.loading,
   
    error: state.app.error,
    actors:state.app.actors,
    producers:state.app.producers,
    token:state.auth.token
  }));
 const [name , setName]=useState("");
 const [year,setYear]=useState("");
 const [producer,setProducer]=useState("");
 const [actor,setActor]=useState("")
 
 const handleinputchange = ({ target: { name, value } }) => {
  setForm({
    ...form,
    [name]: value
  });
};

  useEffect(() => {
    fetch(`${server_url}/movie/${id}`)
      .then((d) => d.json())
      .then((d) => {
       setName(d.movie.name)
       setYear(d.movie.year)
       setProducer(d.movie.producer_id.name)
       setActor(d.movie.actor_ids.name)
      });
  }, [id]);

  return (
    <>
    
        <div>
          <Bluebtn>
            <Link to={"/"} style={style}>
              Home
            </Link>
          </Bluebtn>
        </div>

        <div style={{ border: "2px solid" }}>
          <p>
            {" "}
            <input
              type="text"
              placeholder="name"
              name="name"
             
              onChange={handleinputchange}
            />
          </p>

          <p>
            {" "}
            <input
              type="date"
              placeholder="Year of Release"
              name="year"
              
              onChange={handleinputchange}
            />
          </p>
          <p>
         
           
           <div >
<p>Select producer</p>
     <select className=" w-4 px-4 bg-transparent" name="producer_id"  onChange={handleinputchange}>
       
        {producers.map(p=><option value={p._id}>{p.name}</option>)}
       </select>
</div>
      
      <div>
      <p>Select Actor</p>
     <select className=" bg-transparent w-4 px-4" name="actors_ids"  onChange={handleinputchange}>
      
        {actors.map(p=><option value={p._id}>{p.name}</option>)}
       </select>
</div>





          </p>
          <Greenbtn
            onClick={() => {

              fetch(`${server_url}/movie/${id}`, {
                method: "PATCH",
                body: JSON.stringify(form),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((d) => d.json())
                .then((res) => {
                  console.log(res);
                });

              setName("");
              setYear("");
              navigate("/")
              
            }}
          >
            Edit
          </Greenbtn>
        </div>
 
    </>
  );
};
