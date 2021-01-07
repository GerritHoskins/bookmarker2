import React from 'react'
import { Bookmark, Bookmarks } from './../services/bookmark';


interface  BookmarkListProps {
    items: Bookmarks
};

const List = (props) => {
    const {title} = props
/* 	return props.map((bookmark) => { */
		return (
			<article key={title} className="person">						
				<div>
					<h4>{title}</h4>
				</div>
			</article>			
		)
/* 	});	 */		
}

export default List