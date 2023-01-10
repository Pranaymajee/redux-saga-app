// IT'S ALWAYS NECESSARY TO CREATE VARIABLES HERE AND INITIALIZE THE STATES :)
const initialState = {
    news: [],
    loading: false
}

export default function news(state = initialState, action) {
    switch (action.type) {
        case "GET_NEWS_REQUESTED":
            return {
                /* SETTING NEW VALUE, SETTING THE LOADING TO true UNTILL WE RECIEVE THE DATA. */
                ...state, loading: true 
            }
        case "GET_NEWS_SUCCESS":
            return {
                /* SETTING NEW VALUE, SETTING THE LOADER TO false BECAUSE WE RECIEVED THE DATA
                AND SETTING THE payload COMING FROM THE SAGAS FILE TO news */
                ...state, loading: false, news: action.payload 
            }
        default:
            return state;
    }
}

// loading AND news ARE NOW STORED IN THE STORE WITH NEW DATA IN THEM AND CAN BE ACCESSED FROM ANYWHERE!