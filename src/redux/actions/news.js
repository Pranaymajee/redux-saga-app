// THIS ACTION FUNCTION WILL BE CALLED WHEN DISPATCHED
export function getNews() {
    return {
        type: "GET_NEWS_REQUESTED" // THIS TYPE WILL BE RECIEVED BY THE SAGA "WATCHER FUNCTION" IN THE SAGAS FILE.
    }
}