import {
   GET_BOOKMARKS,
   REMOVE_BOOKMARKS,
   ADD_BOOKMARKS,
   EDIT_BOOKMARKS
} from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BOOKMARKS:
      return {
        ...state,
        bookmarks: payload,
      };  

    case REMOVE_BOOKMARKS:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => 
          bookmark._id !== action.payload)
      };

    case ADD_BOOKMARKS:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case EDIT_BOOKMARKS:
      const updatedBookmark = action.payload;

      /* const updatedBookmarks = state.bookmarks.map(bookmark => {
        if (bookmark._id === updatedBookmark) {
          return bookmark;
        }
      }); */

      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => 
          bookmark._id  === updatedBookmark)
      };

    default:
      return state;
  }
};