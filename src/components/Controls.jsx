import React, { useEffect, useState, useRef } from 'react';
import { getBookmarks, addBookmark } from '../services/bookmark';
import List from './List';

const test = {
    title: "Express App",
    url: "https://dev.to/myogeshchavan97/create-a-bookmark-manager-app-using-faunadb-and-netlify-serverless-functions-4cp0",
    tag: "Express MongoDB Node.js",
    date: "2019-04-30T21:19:15.187Z"
}

const Controls = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoader] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {
        if(!bookmarks.length > 0){
            fetchBookmarks();              
            setLoader(false);
        }        
    }, [])

    const fetchBookmarks = async () => {
        mounted.current = true;
        setLoader(true);
            let items = await getBookmarks();                     
                if (mounted.current) {
                    setBookmarks(items);
                    setLoader(false);
                }
            return () => {
                mounted.current = false;
            }
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
        {!loading &&
            <div>
                <List bookmarks={bookmarks} />
            </div>
        }
    </section>
    );
};

export default Controls;