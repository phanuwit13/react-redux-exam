import * as actions from '../actions'

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true }
    case actions.CLEAR_POSTS:
      return { ...initialState }
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
