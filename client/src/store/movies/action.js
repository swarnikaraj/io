import {ADD_ACTOR,ADD_ACTOR_LOADING,ADD_ACTOR_ERROR,ADD_ACTOR_SUCCESS,GET_ALL_ACTOR,GET_ACTOR_SUCCESS,GET_ACTOR_ERROR,REMOVE_ACTOR,GET_ACTOR,GET_NEW,EDIT_ACTOR
,ADD_PRODUCER,ADD_PRODUCER_LOADING,ADD_PRODUCER_ERROR,ADD_PRODUCER_SUCCESS,GET_ALL_PRODUCER,GET_PRODUCER_SUCCESS,GET_PRODUCER_ERROR,REMOVE_PRODUCER,GET_PRODUCER,EDIT_PRODUCER,
ADD_MOVIE,ADD_MOVIE_LOADING,ADD_MOVIE_ERROR,ADD_MOVIE_SUCCESS,GET_ALL_MOVIE,GET_MOVIE_SUCCESS,GET_MOVIE_ERROR,REMOVE_MOVIE, GET_MOVIE, EDIT_MOVIE} from "./actionTypes"

export const addActor=(data)=>{

return {
    type:ADD_ACTOR,
    payload:data
}};


export const addActorLoading=()=>{
    return {
        type:ADD_ACTOR_LOADING
    }
}

export const addActorSuccess=(data)=>{
    return {
        type:ADD_ACTOR_SUCCESS,
        payload:data
    }
}

export const getActorSuccess=(data)=>{
    return {
        type:GET_ACTOR_SUCCESS,
        payload:data
    }

}
export const addActorError=(data)=>{
    return {
        type:ADD_ACTOR_ERROR,
        payload:data
    }
}


export const removeActor=(id)=>{

    return {
        type:REMOVE_ACTOR,
        payload:id
    }};

export const editActor=(id)=>{

        return {
            type:EDIT_ACTOR,
            payload:id
        }};




export const getNew=( )=>{
    return {
        type:GET_NEW,
        
    }
};


export const getAllActor=(data)=>{
    return {
        type:GET_ALL_ACTOR,
        payload:data
    }
}


export const getActorError=(data)=>{
    return {
        type:GET_ACTOR_ERROR,
        payload:data
    }
}


export const getActor=(id)=>{
    return {
        type:GET_ACTOR,
        payload:id
    }
}












export const addProducer=(data)=>{

    return {
        type:ADD_PRODUCER,
        payload:data
    }};
    
    
    export const addProducerLoading=()=>{
        return {
            type:ADD_PRODUCER_LOADING
        }
    }
    
    export const addProducerSuccess=(data)=>{
        return {
            type:ADD_PRODUCER_SUCCESS,
            payload:data
        }
    }
    
    export const getProducerSuccess=(data)=>{
        return {
            type:GET_PRODUCER_SUCCESS,
            payload:data
        }
    
    }
    export const addProducerError=(data)=>{
        return {
            type:ADD_PRODUCER_ERROR,
            payload:data
        }
    }
    
    
    export const removeProducer=(id)=>{
    
        return {
            type:REMOVE_PRODUCER,
            payload:id
        }};
    
    export const editProducer=(id)=>{
    
            return {
                type:EDIT_PRODUCER,
                payload:id
            }};
    
    
    
    export const getAllProducer=(data)=>{
        return {
            type:GET_ALL_PRODUCER,
            payload:data
        }
    }
    
    
    export const getProducerError=(data)=>{
        return {
            type:GET_PRODUCER_ERROR,
            payload:data
        }
    }
    
    
    export const getProducer=(id)=>{
        return {
            type:GET_PRODUCER,
            payload:id
        }
    }











    export const addMovie=(data)=>{

        return {
            type:ADD_MOVIE,
            payload:data
        }};
        
        
        export const addMovieLoading=()=>{
            return {
                type:ADD_MOVIE_LOADING
            }
        }
        
        export const addMovieSuccess=(data)=>{
            return {
                type:ADD_MOVIE_SUCCESS,
                payload:data
            }
        }
        
        export const getMovieSuccess=(data)=>{
            return {
                type:GET_MOVIE_SUCCESS,
                payload:data
            }
        
        }
        export const addMovieError=(data)=>{
            return {
                type:ADD_MOVIE_ERROR,
                payload:data
            }
        }
        
        
        export const removeMovie=(id)=>{
        
            return {
                type:REMOVE_MOVIE,
                payload:id
            }};
        
        export const editMovie=(id)=>{
        
                return {
                    type:EDIT_MOVIE,
                    payload:id
                }};
        
        
        
        export const getAllmovies=(data)=>{
            return {
                type:GET_ALL_MOVIE,
                payload:data
            }
        }
        
        
        export const getMoviesError=(data)=>{
            return {
                type:GET_MOVIE_ERROR,
                payload:data
            }
        }
        
        
        export const getMovie=(id)=>{
            return {
                type:GET_MOVIE,
                payload:id
            }
        }