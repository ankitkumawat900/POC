import { ADD_POST, ADD_USER, CHECK_BOX_DATA, DATA_SUCCESS, REMOVE_USER, RESET_STATE, USER_LIST } from "./Constaints"



export const setDataSuccess = (data)=>{
    return{
        type:DATA_SUCCESS,
        payload:data
    }
}
export const setCheckData = (data)=>{
    return{
        type:CHECK_BOX_DATA,
        payload:data
    }
}

export const setUserData = (data)=>{
    return{
        type:ADD_USER,
        payload:data
    }
}

export const resetState = () => ({
    type: RESET_STATE,
  });
  