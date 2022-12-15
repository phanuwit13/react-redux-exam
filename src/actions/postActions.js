import { postServices } from '../services'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'
export const CLEAR_POST = 'CLEAR_POST'

export const postActions = {
  //get list posts call dispatch type CLEAR_POSTS
  fetchPost: (id) => {
    return async (dispatch) => {
      //call dispatch set loading
      dispatch({ type: GET_POST })

      try {
        const { data } = await postServices.getPost(id)
        //call dispatch type GET_POSTS_SUCCESS when success
        dispatch({
          type: GET_POST_SUCCESS,
          payload: data,
        })
      } catch (error) {
        //call dispatch type GET_POSTS_FAILURE when error
        dispatch({
          type: GET_POST_FAILURE,
        })
      }
    }
  },
  //clear post call dispatch type CLEAR_POSTS
  clearPosts: () => {
    return async (dispatch) => {
      dispatch({ type: CLEAR_POST })
    }
  },
}
