import React, { useReducer } from 'react';
import axios from 'axios';

import BookmarkContext from './BookmarkContext';
import BookmarkReducer from './BookmarkReducer';
import { GET_BOOKMARKS } from '../types';

const API = axios.create({
    baseURL: `http://localhost:5000/bookmarks`,    
});

const BookmarkState = (props) => {
  let initialState = {
    bookmarks: [],
    activeBookmark: null,
  };

  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  const getBookmarks = async () => {
    try {
      let res = await API.get('/');
      let { data } = res;

      dispatch({ type: GET_BOOKMARKS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        activeBookmark: state.activeBookmark,
        getBookmarks,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkState;