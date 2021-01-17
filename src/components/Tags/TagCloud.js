import React, { useContext, useEffect, Fragment } from 'react';
import tagContext from '../../context/Tag/TagContext';
import Tag from './Tag';

const TagCloud = () => { 
  const { 
    tags, 
    getTags 
  } = useContext(tagContext);  
  
  const fetchTags = async() => {  
    try{              
      await getTags();        
    }catch(err) {
      console.log('Tags: Error during UI data query' + err);
    } 
  }

  useEffect(() => {   
    fetchTags();    
  }, []);
 
  return (        
    <Fragment>
      <div>
        {tags.length  
          ? tags.map((tag) => {
            const {_id, name} = tag;  
            return (
                <Fragment>{name}</Fragment>
            )
          }) : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
        }
      </div>
    </Fragment>
  );
};

export default TagCloud;