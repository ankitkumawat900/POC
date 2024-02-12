const {CHECK_BOX_DATA, DATA_SUCCESS, RESET_STATE } = require("./Constaints")

const initialState = {
    checkData:[]
}
const postReducer = (state=initialState, action)=>{
    switch(action.type){
        case CHECK_BOX_DATA:
             return {
               ...state,
               checkData: [...state.checkData, action.payload],
             }
           
        case DATA_SUCCESS:
            return {
                checkData:[action.payload]        
        };
        case RESET_STATE:
            return {checkData:[]};
        default: return state;    
    }
}

export default postReducer;