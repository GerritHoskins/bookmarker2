import React, { useReducer } from 'react';
import axios from 'axios';
import BookmarkContext from './BookmarkContext';
import BookmarkReducer from './BookmarkReducer';
import {
  GET_BOOKMARKS,
  REMOVE_BOOKMARKS,
  ADD_BOOKMARKS,
  EDIT_BOOKMARKS,
  SEARCH_BOOKMARKS
} from '../types';

const API = axios.create({
    baseURL: `http://localhost:5000/bookmarks`,    
});

const BookmarkState = (props) => {
  let initialState = {
    bookmarks: [],
    searchedBookmarks: [],
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

  const removeBookmarks = async (_id) => { 
    dispatch({
      type: REMOVE_BOOKMARKS,
      payload: _id
    });
  }

  const addBookmarks = async (bookmarks) => { 
    dispatch({
      type: ADD_BOOKMARKS,
      payload: bookmarks
    });
  }

  const editBookmarks = async (bookmark) => {
    dispatch({
      type: EDIT_BOOKMARKS,
      payload: bookmark
    });
  }

  const initiateAddBookmarks = async (bookmark) => {
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
    }catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  const initiateRemoveBookmarks = async (_id) => {
    try {
      let res = await API.delete(`/${_id}`);
      let { data } = res;
      dispatch({ 
        type: REMOVE_BOOKMARKS, 
        payload: _id 
      });
    }catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  const initiateEditBookmarks = async (bookmark) => {
    try {
      let res = await API.post(`/edit/${bookmark._id}`, {
        title: bookmark.title,
        url: bookmark.url,
        tag: bookmark.tag
      });
      let { data } = res;
      dispatch({ 
        type: EDIT_BOOKMARKS, 
        payload: data 
      });
    }catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  const initiateSearchBookmarks = async (searchTerms) => {
    if(!searchTerms.length > 0){
      getBookmarks();
      return;
    }
    try {
      let res = await API.get(`/search/${searchTerms}`);
      let { data } = res;
      dispatch({ 
        type: SEARCH_BOOKMARKS, 
        payload: data 
      });
    }catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        activeBookmark: state.activeBookmark,
        searchedBookmarks: state.searchedBookmarks,
        getBookmarks,
        removeBookmarks,
        editBookmarks,
        addBookmarks,
        initiateAddBookmarks,
        initiateEditBookmarks,
        initiateRemoveBookmarks,
        initiateSearchBookmarks,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkState;