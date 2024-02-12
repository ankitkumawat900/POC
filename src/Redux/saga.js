import {takeEvery, put, takeLatest} from 'redux-saga/effects';
import { USER_LIST, SET_USER_DATA, CHECK_BOX_DATA } from './Constaints';
import { setDataSuccess } from './Actions';
function *checkData(action){
    
    const {payload} = action;

    console.log("pay",payload);

    const data = yield fetch('https://dummyjson.com/users')
        .then(res => res.json());

    // const response = yield fetch(`${url}/endpoint`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   }).then(res =>res.json);

     //yield put(setDataSuccess(payload));
}

function *SagaData(){
    yield takeLatest(CHECK_BOX_DATA, checkData);
};
export default SagaData;