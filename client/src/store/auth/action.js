import {LOGIN_USER,LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS} from "./actionTypes"

export const loginuser=(data)=>{

return {
    type:LOGIN_USER,
    payload:data
}};


export const loginfailure=(err)=>{

    return {
        type:LOGIN_FAILURE,
        payload:err
    }
}   

export const loginsuccess=(token)=>{

        return {
            type:LOGIN_SUCCESS,
            payload:token
        };

    }
export const logoutsuccess=()=>{
    return {
        type:LOGOUT_SUCCESS,
        payload:""
    }
}