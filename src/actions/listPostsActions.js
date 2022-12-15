import { listPostServices } from '../services'

export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
export const CLEAR_POSTS = 'CLEAR_POSTS'

export const listPostsActions = {
  //get list posts call dispatch type CLEAR_POSTS
  fetchListPosts: () => {
    return async (dispatch) => {
      //call dispatch set loading
      dispatch({ type: GET_POSTS })

      try {
        const { data } = await listPostServices.getListPosts()
        //call dispatch type GET_POSTS_SUCCESS when success
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: data,
        })
      } catch (error) {
        //call dispatch type GET_POSTS_FAILURE when error
        dispatch({
          type: GET_POSTS_FAILURE,
        })
      }
    }
  },
  //clear post call dispatch type CLEAR_POSTS
  clearPosts: () => {
    return async (dispatch) => {
      dispatch({ type: CLEAR_POSTS })
    }
  },
}