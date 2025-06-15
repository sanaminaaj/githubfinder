const githubReducer=(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'CLEAR':
            return {
                ...state,
                users: action.payload,
                loading:false,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case "SET_REPO":
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}
export default githubReducer;