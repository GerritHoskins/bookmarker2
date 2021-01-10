import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BookmarkList from './components/BookmarkList';
import BookmarkState from './context/Bookmark/BookmarkState';

function App() {
  return (
    <BookmarkState>
      <BrowserRouter>
        <div className="App">     
          <Switch>
            <Route component={BookmarkList} path="/" exact={true} />
          </Switch>
        </div>
      </BrowserRouter>        
    </BookmarkState>
  );
}

export default App;
