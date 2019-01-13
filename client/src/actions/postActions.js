import axios from 'axios';

import { 
    POST_LOADING, 
    GET_POST, 
    GET_POSTS, 
    GET_ERRORS, 
    ADD_POST, 
    DELETE_POST 
} from './types';

// Add new post
export const addPost = (postData) => dispatch => {
    axios
        .post('/api/posts', postData)
        .then(res => 
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};