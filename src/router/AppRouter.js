import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookmarkList from '../components/BookmarkList';
import AddBookmark from '../components/AddBookmark';
/* import EditBookmark from '../components/EditBookmark';
import BookmarkList from '../components/BookmarkList';
import Header from '../components/Header'; */



const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="bookmark-form">
        <Switch>
          <Route component={BookmarkList} path="/" exact={true} />
         {/* <Route component={BookmarkList} path="/list" /> */}
          <Route component={AddBookmark} path="/add" />
          {/* <Route component={EditBookmark} path="/edit/:id" /> */}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;