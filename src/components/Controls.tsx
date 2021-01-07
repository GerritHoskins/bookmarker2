import React, { useEffect, useState, useRef } from 'react';
import { getBookmarks, addBookmark, Bookmark, Bookmarks } from './../services/bookmark';
import List from './List';
const test : Bookmark = {
    title: "Express App",
    url: "https://dev.to/myogeshchavan97/create-a-bookmark-manager-app-using-faunadb-and-netlify-serverless-functions-4cp0",
    tag: "Express MongoDB Node.js",
    date: "2019-04-30T21:19:15.187Z"
}

interface Props {
  };
const Controls: React.FC<Props> = () => {
    const [bookmarks, setBookmarks] = useState({});
    const [loading, setLoader] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {        
        (async () => {
          // const items = fetchBookmarks();  
           const items = await fetchBookmarks();   
           console.log(items)    
        })();

        return () => {
            mounted.current = false;         
        };

 
        
    }, [])

    const fetchBookmarks = async() => {
        mounted.current = true;
        setLoader(true);
        await getBookmarks()
        .then(items => {
            return items;
        })
    }

    return (
    <section className="controls">
        <div className="control-links">
        <button onClick={() => addBookmark(test)} className="link">
            Add Bookmark
        </button>
        {/* <button onClick={() => fetchBookmarks()} className="link">
            Bookmarks List
        </button> */}
        </div>
        <div>
            <List props={test} />
        </div>
    </section>
    );
};

export default Controls;