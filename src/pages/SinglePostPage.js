import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { postActions, commentActions } from '../actions'

import { Post } from '../components/Post'
import { Comment } from '../components/Comment'

const SinglePostPage = ({ match }) => {
  const dispatch = useDispatch()
  const getPost = useSelector((state) => state.post)
  const getComments = useSelector((state) => state.comments)

  useEffect(() => {
    const { id } = match.params

    dispatch(commentActions.fetchComments(id))
    dispatch(postActions.fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    if (getPost.loading) return <p>Loading post...</p>
    if (getPost.hasErrors) return <p>Unable to display post.</p>

    return <Post post={getPost.post} />
  }

  const renderComments = () => {
    if (getComments.loading) return <p>Loading comments...</p>
    if (getComments.hasErrors) return <p>Unable to display comments.</p>

    return getComments.comments?.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  )
}

export default connect()(SinglePostPage)
