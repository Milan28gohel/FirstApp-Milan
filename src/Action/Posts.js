import Axios from 'axios';

const getPostsStarted = () => ({
    type: 'GET_POSTS_STARTED'
  });
  
  const getPostsSucceeded = data => ({
    type: 'GET_POSTS_SUCCEEDED',
    payload: data
  });
  
  const getPostsFailed = error => ({
    type: 'GET_POSTS_FAILED',
    payload: error,
    error: true
  }); 

 export const getPosts=()=>{
    
    return dispatch => {
      dispatch(getPostsStarted());
  
      const url = 'https://jsonplaceholder.typicode.com/posts';
      Axios.get(`${url}`)
        .then(function (response) {
          dispatch(getPostsSucceeded(response.data));
        })
        .catch(function (error) {
          dispatch(getPostsFailed(error));
        });
    };
  
  
}

