import React, { useReducer } from 'react';
import axios from 'axios';
import BookmarkContext from './BookmarkContext';
import BookmarkReducer from './BookmarkReducer';
import {
  GET_BOOKMARKS,
  REMOVE_BOOKMARKS,
  ADD_BOOKMARKS,
  EDIT_BOOKMARKS
} from '../types';

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

      dispatch({ 
        type: GET_BOOKMARKS, 
        payload: data 
      });
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookmarks = async (id) => { 
    dispatch({
      type: REMOVE_BOOKMARKS,
      payload: id
    });
  }

  const addBookmarks = async (bookmarks) => { 
    dispatch({
      type: ADD_BOOKMARKS,
      payload: bookmarks
    });
  }

  const editBookmarks = async (bookmarks) => {
    dispatch({
      type: EDIT_BOOKMARKS,
      payload: bookmarks
    });
  }

  const initiateAddBookmarks = async (bookmark) => {
  //  return async (dispatch) => {
      try {
        let res = await API.post('/add', {
          title: bookmark.title,
          url: bookmark.url,
          tag: bookmark.tag
        });
        let { data } = res;
        dispatch({ 
          type: ADD_BOOKMARKS, 
          payload: data 
        });
      } catch (error) {
        console.log(error.response + ' ' + error.response.data);
      }
    //};
  };

  const initiateRemoveBookmarks = async (_id) => {
    try {
      let res = await API.delete('/'+ _id);
      let { data } = res;
      dispatch({ 
        type: REMOVE_BOOKMARKS, 
        payload: data 
      });
    } catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        activeBookmark: state.activeBookmark,
        getBookmarks,
        removeBookmarks,
        addBookmarks,
        initiateAddBookmarks,
        editBookmarks,
        initiateRemoveBookmarks,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkState;