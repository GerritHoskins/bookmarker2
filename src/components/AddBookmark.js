import React, { Fragment, useState, useContext } from "react";
import bookmarkContext from "../context/Bookmark/BookmarkContext";
import TagState from '../context/Tag/TagState';
import TagList from './Tags/TagList';
import { useHistory, Link } from "react-router-dom";

const AddBookmark = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const { initiateAddBookmarks } = useContext(bookmarkContext);
  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const newBookmark = {
        title,
        url,
        tag
    }
    initiateAddBookmarks(newBookmark);
    history.push("/");
  }

  return (
    <Fragment>
        <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
                <div className="w-full mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                        Title of Bookmark
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
                </div>
                <div className="w-full  mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="url">
                        Url
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Enter url" />
                </div>
                <div className="w-full  mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tag">
                        Tags
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={tag} onChange={(e) => setTag(e.target.value)} type="text" placeholder="Enter Tags" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Bookmark
                    </button>
                </div>
                <div className="text-center mt-4 text-gray-500"><Link to="/">Cancel</Link></div>
                <TagState>
                    <TagList />
                </TagState>  
            </form>
        </div>
    </Fragment>
  )
}

export default AddBookmark;