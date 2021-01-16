import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import Home from './components/Home';
import BookmarkState from './context/Bookmark/BookmarkState';
import AddBookmark from './components/AddBookmark';
import EditBookmark from './components/EditBookmark';

function App() {
  return (
    <BookmarkState>
      <BrowserRouter>
        <div className="App">     
          <Switch>
            <Route component={Home} path="/" exact={true} />
            <Route component={AddBookmark} path="/add" exact={true}  />
            <Route component={EditBookmark} path="/edit/:id" exact={true}  />
          </Switch>
        </div>
      </BrowserRouter>        
    </BookmarkState>
  );
}

export default App;
