import React, { Fragment, useState, useContext, useEffect } from "react";
import bookmarkContext from "../context/Bookmark/BookmarkContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const EditBookmark = route => {
  const [selectedBookmark, setSelectedBookmark] = useState({
    _id: "0",
    title: "",
    url: "",
    tag: ""
  });
  const { initiateEditBookmarks, bookmarks } = useContext(bookmarkContext);
  let history = useHistory();

  useEffect(() => {
    setSelectedBookmark(bookmarks[0]);
  }, []);

  const onSubmit = e => {
      e.preventDefault();
      initiateEditBookmarks(selectedBookmark);
      history.push("/");
  }

  const handleOnChange = (bookmarkKey, value) =>
    setSelectedBookmark({ ...selectedBookmark, [bookmarkKey]: value });

    if (!selectedBookmark || !selectedBookmark._id) {
        console.log("Id dont match !");
    }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Title of bookmark
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBookmark.title}
              onChange={e => handleOnChange("title", e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="url"
            >
              Url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBookmark.url}
              onChange={e => handleOnChange("url", e.target.value)}
              type="text"
              placeholder="Enter Url"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="tag"
            >
              Tags
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedBookmark.tag}
              onChange={e => handleOnChange("tag", e.target.value)}
              type="text"
              placeholder="Enter Tags"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Save Bookmark
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>   
  )
}

export default EditBookmark;