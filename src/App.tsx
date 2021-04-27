import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { PostList } from './components/PostList';
import { PostWithComments } from './components/PostWithComments';
import { Home as HomePage } from './pages/Home';
import { componentGesture } from './services/utility';

function App() {
  componentGesture(App.name)

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/post/:id" >
            <PostWithComments />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
