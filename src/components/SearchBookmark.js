import React, { Fragment, useState, useContext } from 'react';
import bookmarkContext from '../context/Bookmark/BookmarkContext';
import { useHistory } from 'react-router-dom';

const SearchBookmark = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { initiateSearchBookmarks } = useContext(bookmarkContext);  

  let history = useHistory();

  const onSubmit = e => {
      e.preventDefault();      
      if(searchTerm.length === 0){
        history.replace('/');
      }else {
        initiateSearchBookmarks(searchTerm);  
      }
  }

  const handleOnChange = (value) => {
      setSearchTerm(value);
  };

  return (
    <Fragment>
      <div className="mb-2 mt-2">
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="searchTerm"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                value={searchTerm || ''}
                placeholder="Search by title or tag"
                onChange={e => handleOnChange(e.target.value)}
            />
          </form>
        </div>
    </Fragment>
  );
};

export default SearchBookmark;