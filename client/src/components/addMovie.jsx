import { Greenbtn } from "../styledComponents/buttons";
import { RightP } from "../styledComponents/parents";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovie,
  addMovieLoading,
  addMovieSuccess,
  
  getActorSuccess,
  getActorError,
  getProducerSuccess,
  getProducerError,
  addActorLoading,
  addActorSuccess,
  addActorError,
  addProducerSuccess,
  addProducerError,
 
} from "../store/movies/action";
import { ADD_MOVIE_ERROR, ADD_TODO_ERROR } from "../store/movies/actionTypes";

export const FormtoAddMovie = () => {
  const server_url="http://localhost:2345"
  const [form, setForm] = useState({});
 
 
  const dispatch = useDispatch();
  const { loading, error ,actors,producers ,token} = useSelector((state) => ({
    loading: state.app.loading,
   
    error: state.app.error,
    actors:state.app.actors,
    producers:state.app.producers,
    token:state.auth.token
  }));

  const handleinputchange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };


  useEffect(() => {
    getActors();
    getProducers()
  }, []);

  const getActors = async () => {
    try {
      const data = await fetch(`${server_url}/actor`).then((d) =>
        d.json()
      );

      dispatch(getActorSuccess(data));
      
      console.log(data,"actor");
    } catch (err) {
      dispatch(getActorError(err));
    }
  };
  

  const getProducers = async () => {
    try {
      const data = await fetch(`${server_url}/producer`).then((d) =>
        d.json()
      );

      dispatch(getProducerSuccess(data));
      
      // dispatch(getAllProducer(data));
      console.log(data,"producers");
    } catch (err) {
      dispatch(getProducerError(err));
    }
  };

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>some is went wrong</div>
  ) : (
    <div className="grid grid-cols-3 gap-2 w-1/2 m-auto bg-white text-gray-800">
    <div className="border-gray-200 py-4 px-5">

    <h1>Add Movie</h1>
      <div className="form">

      <div> <input
          type="text"
          placeholder="movie name"
          onChange={handleinputchange}
          name="name"
        /></div>
       
<br/>
<div> <input
          type="text"
          placeholder="poster url"
          onChange={handleinputchange}
          name="imageUrl"
        /></div>
       
<br/>

         <div>    
          <input
          type="date"
          placeholder="year"
          onChange={handleinputchange}
          name="year"
        /></div>
      
 <br/>
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
        
        <Greenbtn
          onClick={() => {
            console.log(form,"before post",token)
            dispatch(addMovieLoading());
            fetch(`${server_url}/movie`, {
              method: "POST",
              body: JSON.stringify(form),
              headers: {
                "Content-Type": "application/json",
                'Authorization':`${token}`
              },

            })
              .then((d) => d.json())
              .then((res) => {
                dispatch(addMovieSuccess(res));
              })
              .catch((err) => {
                dispatch(ADD_MOVIE_ERROR);
              });
          }}
        >
          Add Movie
        </Greenbtn>
      </div>
    </div>


    
    <div className="border-gray-200 py-4 px-5">

    <h1>Add Actor</h1>
      <div className="form">

      <div> <input
          type="text"
          placeholder="actor name"
          onChange={handleinputchange}
          name="name"
        /></div>
       
<br/>
<div> 
<p>select gender</p>
         <select
          onChange={handleinputchange}
          name="gender">
          <option value="">select</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="others">others</option>
          </select>
          </div>


<div> <br/><input
          type="text"
          placeholder="bio"
          onChange={handleinputchange}
          name="bio"
        /></div>

         <div>    
         <p>date of birth</p>
          <input
          type="date"
          placeholder="dob"
          onChange={handleinputchange}
          name="dob"
        /></div>
      
 <br/>

      

        
        <Greenbtn
          onClick={() => {
            dispatch(addActorLoading());
            fetch(`${server_url}/actor`, {
              method: "POST",
              body: JSON.stringify(form),
              headers: {
                "Content-Type": "application/json",
                'Authorization':token
              },
            })
              .then((d) => d.json())
              .then((res) => {
                dispatch(addActorSuccess(res));
                console.log(res)
              })
              .catch((err) => {
                dispatch(addActorError);
              });
          }}
        >
          Add Actor
        </Greenbtn>
      </div>
    </div>


    

    <div className="border-gray-200 py-4 px-5">

<h1>Add Producer</h1>
  <div className="form">

  <div> <input
      type="text"
      placeholder="actor name"
      onChange={handleinputchange}
      name="name"
    /></div>
   
<br/>
<div> 
<p>select gender</p>
     <select
      onChange={handleinputchange}
      name="gender">
      <option value="">select</option>
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="others">others</option>
      </select>
      </div>


<div> <br/><input
      type="text"
      placeholder="bio"
      onChange={handleinputchange}
      name="bio"
    /></div>

     <div>    
     <p>date of birth</p>
      <input
      type="date"
      placeholder="dob"
      onChange={handleinputchange}
      name="dob"
    /></div>
  
<br/>

  

    
    <Greenbtn
      onClick={() => {
        dispatch(addActorLoading());
        fetch(`${server_url}/producer`, {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
           
    	      'Authorization':token
          },
        })
          .then((d) => d.json())
          .then((res) => {
            dispatch(addProducerSuccess(res));
            console.log(res)
          })
          .catch((err) => {
            dispatch(addProducerError);
          });
      }}
    >
      Add Actor
    </Greenbtn>
  </div>
</div>



    </div>







  );
};
