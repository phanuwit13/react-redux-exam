import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { listPostsActions } from '../actions'

import { Post } from '../components/Post'

const PostsPage = ({ dispatch }) => {
  const getPosts = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(listPostsActions.fetchListPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (getPosts.loading) return <p>Loading posts...</p>
    if (getPosts.hasErrors) return <p>Unable to display posts.</p>

    return getPosts.posts?.map((post) => (
      <Post key={post.id} post={post} excerpt />
    ))
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

export default connect()(PostsPage)
