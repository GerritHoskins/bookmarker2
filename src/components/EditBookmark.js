import React, { Fragment, useState, useContext } from "react";
import bookmarkContext from "../context/Bookmark/BookmarkContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const EditBookmark = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const { initiateEditBookmarks } = useContext(bookmarkContext);
  let history = useHistory();

  const onSubmit = e => {
      e.preventDefault();
      const updatedBookmark = {
          title,
          url,
          tag
      }
      initiateEditBookmarks(updatedBookmark);
      history.push("/");
  }

  return (
      <Fragment>
          test
      </Fragment>
  )
}

export default EditBookmark;