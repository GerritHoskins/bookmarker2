import React, { useContext, useEffect } from 'react';

import bookmarkContext from '../context/Bookmark/BookmarkContext';

const BookmarkList = () => {
  const BookmarkContext = useContext(bookmarkContext);

  useEffect(() => {
    BookmarkContext.getBookmarks();
  }, []);

  return (
    <>
      <div className="list-group h-100" >
        {BookmarkContext.bookmarks.length
          ? BookmarkContext.bookmarks.map((bookmark) => (
              <a
                key={bookmark.id}
                href="#!"
            /*     onClick={() => BookmarkContext.getBookmarks(bookmark.id)} */
                className="list-group-item list-group-item-action text-truncate"
              >
                {bookmark.title}
              </a>
            ))
          : null}
      </div>
    </>
  );
};

export default BookmarkList;