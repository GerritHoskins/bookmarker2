  
import React, { Fragment } from 'react';
import BookmarkList from './BookmarkList';

const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <BookmarkList />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;