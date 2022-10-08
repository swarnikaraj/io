
import './App.css';




import {Route, Routes} from "react-router-dom"
import {Home} from "./components/home"
import { FormtoAddMovie } from './components/addMovie';
import {EditMovie} from "./components/editMovie"
import {Login} from "./components/loginuser"
import { Register } from './components/register';
import {PrivateRoute} from "./components/PrivateRoute"


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element ={
         <PrivateRoute>
            <Home/>
     
            </PrivateRoute> 
     }/>
     <Route path="/movie/admin" element ={<FormtoAddMovie/>}/>
     <Route path="/movie/:id/edit" element ={<EditMovie/>}/>
     <Route path="/login" element ={<Login/>}/>
     <Route path="/register" element ={<Register/>}/>
     <Route path="*" element ={<div>Page not found</div>}/>
     </Routes> 
     
    </div>
  );
}

export default App;
