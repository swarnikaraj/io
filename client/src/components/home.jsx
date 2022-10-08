import { Parentdiv, LeftP } from "../styledComponents/parents";
import { GetAllmovies } from "./getMovies";
import { Formtodo } from "./addMovie";
import { Bluebtn } from "../styledComponents/buttons";
import { useDispatch } from "react-redux";
import { getCompleted } from "../store/movies/action";
import { getNew } from "../store/movies/action";
import { Header } from "./header";
export const Home = () => {
  const dispatch = useDispatch();
  

  return (
    <> <Header/>
      <div className="bg-black px-4 py-28">
        <div className="grid grid-cols-4 gap-4">
       
          <GetAllmovies />
        </div>
      </div>
    </>
  );
};
