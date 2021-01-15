import React, { Fragment, useState, useContext } from 'react';
import bookmarkContext from '../context/Bookmark/BookmarkContext';

const SearchBookmark = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { initiateSearchBookmarks } = useContext(bookmarkContext);  

  const onSubmit = e => {
      e.preventDefault();
      initiateSearchBookmarks(searchTerm);  
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