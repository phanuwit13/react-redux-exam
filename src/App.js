import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/ListPostsPage'
import SinglePostPage from './pages/SinglePostPage'
import { listPostsActions } from './actions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(listPostsActions.clearPosts())
  }

  return (
    <Router>
      <Navbar />
      <button onClick={handleClear}>Clear</button>
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/posts' component={PostsPage} />
        <Route exact path='/posts/:id' component={SinglePostPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
