import {ADD_USER, REMOVE_USER, RESET_STATE} from './Constaints'

const initialState={
    userData:[{id:1,name:'ankit'}]
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_USER:
            return ({
                ...state,
                userData: [...state.userData,action.payload]
            })
        case REMOVE_USER:
            const a = state.userData.filter(item=>item.id!=action.payload.id)
            console.log(a)
            return({
            ...state,
            userData:a
        })
        case RESET_STATE:
            return{userData:[]}
        default: return state;
    }
}
export default reducer;