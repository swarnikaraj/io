import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { saveData, loadData } from "../utils/localstore";
import {
  getAllmovies,
  getMovieSuccess,
  getMoviesError,

  removeMovie,
} from "../store/movies/action";
import { Link } from "react-router-dom";

import { Donebtn, Delbtn, Yellowbtn } from "../styledComponents/buttons";


export const GetAllmovies = () => {
  const server_url="http://localhost:2345"
  const dispatch = useDispatch();
  const { loading, movies, error ,actors,producers} = useSelector((state) => ({
    loading: state.app.loading,
    actors: state.app.actors,
    movies:state.app.movies,
    producers:state.app.producers,
    error: state.app.loading,
  }));

  const user=loadData("user")
const [userName,setUserName]=useState("")

 useEffect(()=>{
      setUserName(user)
 },[user])

  const delhandle = async (id) => {
    try {
      await fetch(`${server_url}/movie/${id}`, { method: "DELETE" })
        .then((d) => d.json())
        .then((res) => {
          dispatch(removeMovie(res._id));
        });

      getdata();
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const data = await fetch(`${server_url}/movie`).then((d) =>
        d.json()
      );

      dispatch(getMovieSuccess(data));
      console.log(data);
    } catch (err) {
      dispatch(getMoviesError(err));
    }
  };

  return (
    <>
      {movies.map((e) => (
        <div className="bg-[#51515180] m-2 text-teal-400" key={e._id}>
        <img alt="movie" src={e.imageUrl} className="h-full w-full"/>
          <p>{e.name}</p>
          <p>
          
          </p>
          {user?
          <p>
           <Delbtn
              onClick={() => {
                delhandle(e._id);
              }}
            >
              Delete
            </Delbtn>
           
            <Delbtn>
              <Link
                to={`/movie/${e._id}/edit`}
                style={{ textDecoration: "none", color: "#282C34" }}
              >
                Edit
              </Link>
            </Delbtn>
            
          </p>
          
          
          :"explore"}

        </div>
      ))}
    </>
  );
};
