import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

/* yield -> IT IS A BUILT-IN FUNCTION WHICH ALLOWS TO USE GENERATOR FUNCTIONS SEQUENTIALLY.
WHEN USED IN JAVASCRIPT, THE GENERATOR FUNCTIONS WILL ALLOW TO YIELD ALL VALUES FROM THE NESTED FUNCTIONS. */

/* call -> call is a blocking effect creator.
This means that the saga will not continue to run to the next yield until the API call finishes. */

/* put -> ONCE call IS FINISHED, WE yield put.
put IS DISPATCHING A NEW ACTION WITH THE RESULT FROM THE PREVIOUS YIELD i.e call */

/* takeEvery -> takeEvery CALLS A GENERATOR FUNCTION(WORKER FUNCTION)
WHENEVER A DISPATCHED ACTION MATCHES THE SPECIFIED PATTERN OR TYPE INSIDE IT. */

// SAGA GENERATOR FUNCTION ALSO CALLED AS THE "WORKER FUNCTION".
function* fetchNews() {
    try{
        const responseData = yield call(() => axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a808d7243f20469c810b10af5f78183c`));
        // PUTTING(SENDING) THE RESPONSE DATA TO THE REDUCER WITH THE TYPE NAME "GET_NEWS_SUCCESS"
        yield put({ type: 'GET_NEWS_SUCCESS', payload: responseData }); // PASSING THE RESPONSE IN THE PAYLOAD
    }
    catch(err){
        console.log(err);// CATCHING ANY ERRORS.
    }
}
/* "WATCHER FUNCTION" THAT WATCHES FOR THE ACTION TYPE WHICH IS DISPATCHED.
(HERE IT'S "GET_NEWS_REQUESTED" FROM getNews() ACTION) */
function* newsSaga(){
    yield takeEvery('GET_NEWS_REQUESTED', fetchNews) // AFTER RECIEVING THE ACTION TYPE, THE WATCHER FUNC CALLS THE WORKER FUNC.
}

export default newsSaga;