import React from 'react';
import BookmarkForm from './BookmarkForm';
/* import Loader from './Loader';
import useLoader from '../custom-hooks/useLoader'; */

const AddBookmark = (props) => {
  //const { isLoading, showLoader, hideLoader } = useLoader();
  const onSubmit = (bookmark) => {
    //showLoader();
   // props.dispatch(initiateAddBookmark(bookmark)).then(() => {
     // hideLoader();
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