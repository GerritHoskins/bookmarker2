import React from "react";

const List = (props) => 
	<>
	{props.bookmarks.map((bookmark) => {
		const {_id, title, tag, date, url} = bookmark;
		return (
			<article key={_id} className="bookmarks-list">	
				<div className="title">
					<strong>Title: </strong>
					{title}
				</div>
				<div className="url">
					<strong>URL: </strong>
					{url}
				</div>
				<div className="tag">
					<strong>Tag: </strong>
					{tag}
				</div>
				<div className="buttons">
					<div className="btn">
						<button>Edit</button>
					</div>
					<div className="btn">
						<button>Delete</button>
					</div>
				</div>
			</article>			
		)	
		})}	
	</>

export default List