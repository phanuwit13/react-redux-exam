import { commentServices } from '../services'

export const GET_COMMENTS = 'GET COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS'

export const commentActions = {
  //get list posts call dispatch type CLEAR_POSTS
  fetchComments: (postId) => {
    return async (dispatch) => {
      //call dispatch set loading
      dispatch({ type: GET_COMMENTS })

      try {
        const { data } = await commentServices.getComment(postId)
        //call dispatch type GET_POSTS_SUCCESS when success
        dispatch({
          type: GET_COMMENTS_SUCCESS,
          payload: data,
        })
      } catch (error) {
        //call dispatch type GET_POSTS_FAILURE when error
        dispatch({
          type: GET_COMMENTS_FAILURE,
        })
      }
    }
  },
  //clear post call dispatch type CLEAR_POSTS
  clearComment: () => {
    return async (dispatch) => {
      dispatch({ type: CLEAR_COMMENTS })
    }
  },
}
