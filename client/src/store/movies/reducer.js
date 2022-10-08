import {ADD_ACTOR,ADD_ACTOR_LOADING,ADD_ACTOR_ERROR,ADD_ACTOR_SUCCESS,GET_ALL_ACTOR,GET_ACTOR_SUCCESS,GET_ACTOR_ERROR,REMOVE_ACTOR,GET_ACTOR,GET_NEW,EDIT_ACTOR
    ,ADD_PRODUCER,ADD_PRODUCER_LOADING,ADD_PRODUCER_ERROR,ADD_PRODUCER_SUCCESS,GET_ALL_PRODUCER,GET_PRODUCER_SUCCESS,GET_PRODUCER_ERROR,REMOVE_PRODUCER,GET_PRODUCER,EDIT_PRODUCER,
    ADD_MOVIE,ADD_MOVIE_LOADING,ADD_MOVIE_ERROR,ADD_MOVIE_SUCCESS,GET_ALL_MOVIE,GET_MOVIE_SUCCESS,GET_MOVIE_ERROR,REMOVE_MOVIE, GET_MOVIE, EDIT_MOVIE} from "./actionTypes"
  


const init={movies:[],producers:[],actors:[],loading:false,error:false}
export const reducer=(state=init,{type,payload})=>{

switch(type){

    case ADD_ACTOR:
        return {
            ...state,
            actors:[...state.actors,payload],
        };

    case ADD_ACTOR_LOADING:
        return {
            ...state,
            loading:true,
            error:false
        };
    case ADD_ACTOR_ERROR:
            return {
                ...state,
                error:true,
                loading:false
            }   ;

            case ADD_ACTOR_SUCCESS:
                return {
                    ...state,
            actors:[...state.actors,payload],
            error:false,
            loading:false
                }           
    
    case REMOVE_ACTOR:
            return {...state,
                actors:state.actors.filter((e)=>(e._id!==payload))
            };   
            
    case EDIT_ACTOR:
                return {
                    ...state,
                    actors:state.actors.filter((e)=>(e._id===payload))
                };        
    
  

    case GET_ACTOR:
        return {
            ...state,
            actors:state.actors.filter((e)=>(e._id===payload))
        }

    case GET_ALL_ACTOR:
        return {
            ...state,
            actors:[...state.actors,...payload]
        }
    case GET_ACTOR_SUCCESS:
        return {
            ...state,
            actors:payload,
            loading:false
        }        
              
        


        case ADD_PRODUCER:
            return {
                ...state,
                producers:[...state.producers,payload],
            };
    
        case ADD_PRODUCER_LOADING:
            return {
                ...state,
                loading:true,
                error:false
            };
        case ADD_PRODUCER_ERROR:
                return {
                    ...state,
                    error:true,
                    loading:false
                }   ;
    
                case ADD_PRODUCER_SUCCESS:
                    return {
                        ...state,
                producers:[...state.producers,payload],
                error:false,
                loading:false
                    }           
        
        case REMOVE_PRODUCER:
                return {...state,
                    producers:state.producers.filter((e)=>(e._id!==payload))
                };   
                
        case EDIT_PRODUCER:
                    return {
                        ...state,
                        producers:state.producers.filter((e)=>(e._id===payload))
                    };        
        
      
    
        case GET_PRODUCER:
            return {
                ...state,
                producers:state.producers.filter((e)=>(e._id===payload))
            }
    
        case GET_ALL_PRODUCER:
            return {
                ...state,
                producers:[...state.producers,...payload]
            }
        case GET_PRODUCER_SUCCESS:
            return {
                ...state,
                producers:payload,
                loading:false
            }        
                







            case ADD_MOVIE:
                return {
                    ...state,
                    movies:[...state.movies,payload],
                };
        
            case ADD_MOVIE_LOADING:
                return {
                    ...state,
                    loading:true,
                    error:false
                };
            case ADD_MOVIE_ERROR:
                    return {
                        ...state,
                        error:true,
                        loading:false
                    }   ;
        
                    case ADD_MOVIE_SUCCESS:
                        return {
                            ...state,
                    movies:[...state.movies,payload],
                    error:false,
                    loading:false
                        }           
            
            case REMOVE_MOVIE:
                    return {...state,
                        movies:state.movies.filter((e)=>(e._id!==payload))
                    };   
                    
            case EDIT_MOVIE:
                        return {
                            ...state,
                            movies:state.movies.filter((e)=>(e._id===payload))
                        };        
            
          
        
            case GET_MOVIE:
                return {
                    ...state,
                    movies:state.movies.filter((e)=>(e._id===payload))
                }
        
            case GET_ALL_MOVIE:
                return {
                    ...state,
                    movies:[...state.movies,...payload]
                }
            case GET_MOVIE_SUCCESS:
                return {
                    ...state,
                    movies:payload,
                    loading:false
                }        
                    








    default:
        return state;    

}





};