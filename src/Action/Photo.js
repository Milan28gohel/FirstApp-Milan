import Axios from "axios";

const getPhotoStarted = () => ({
    type: 'GET_PHOTO_STARTED'
  });
  
  const getPhotoSucceeded = data => ({
    type: 'GET_PHOTO_SUCCEEDED',
    payload: data
  });
  
  const getPhotoFailed = error => ({
    type: 'GET_PHOTO_FAILED',
    payload: error,
    error: true
  }); 

  export const getPhoto=()=>{
    
    return dispatch => {
      dispatch(getPhotoStarted());
  
      const url = 'https://jsonplaceholder.typicode.com/photos';
      Axios.get(`${url}`)
        .then(function (response) {
          dispatch(getPhotoSucceeded(response.data));
        })
        .catch(function (error) {
          dispatch(getPhotoFailed(error));
        });
    };
  
  
}