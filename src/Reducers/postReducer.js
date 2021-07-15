import initialState from "./initialState";

const postReducer = (state = initialState.postData,action)=>{
    switch(action.type){
        case 'GET_POSTS_STARTED':
            return {
                ...state,
                isLoading: true,
                error: null
              };
            case "GET_POSTS_SUCCEEDED":
              return {
                ...state,
                posts: action.payload,
                isLoading: false
              };
            case "GET_POSTS_FAILED":
              return {
                ...state,
                isLoading: false,
                error: action.payload
              };
              default:
               return state;
    }
};

export default postReducer;