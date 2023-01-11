import { all } from 'redux-saga/effects'
import newsSaga from './newsSaga'

/* yield all -> IT INFORMS THE READER THAT WE'RE YIELDING MORE THAN 1 EFFECT. */

export default function* rootSaga() {
    yield all([
        newsSaga(), // CALLING THE RESPECTIVE SAGA WATCHER FUNCTION.
        //CALL ALL WATCHER SAGA FUNCTIONS HERE ONE BY ONE
    ])
}