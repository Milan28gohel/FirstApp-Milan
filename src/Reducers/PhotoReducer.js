import initialState from "./initialState";

const photoReducer = (state = initialState.photoData,action)=>{
    switch(action.type){
        case 'GET_PHOTO_STARTED':
            return {
                ...state,
                isLoading: true,
                error: null
              };
            case "GET_PHOTO_SUCCEEDED":
              return {
                ...state,
                photo: action.payload,
                isLoading: false
              };
            case "GET_PHOTO_FAILED":
              return {
                ...state,
                isLoading: false,
                error: action.payload
              };
              default:
               return state;
    }
};
export default photoReducer;