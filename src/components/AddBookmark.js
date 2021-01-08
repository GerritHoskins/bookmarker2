import React from 'react';
import BookmarkForm from './BookmarkForm';
import { addBookmark } from '../services/bookmark';
/* import Loader from './Loader';
import useLoader from '../hooks/useLoader'; */

const AddBookmark = (props) => {
  //const { isLoading, showLoader, hideLoader } = useLoader();
  const onSubmit = async(bookmark) => {
    //showLoader();
   // props.dispatch(initiateAddBookmark(bookmark)).then(() => {
     // hideLoader();
      await addBookmark(bookmark);
      props.history.push('/');
    //});
  };

  return (
    <div>
      {/* <Loader show={isLoading}>Loading...</Loader> */}
      <BookmarkForm {...props} onSubmit={onSubmit} />
    </div>
  );
};

export default AddBookmark;