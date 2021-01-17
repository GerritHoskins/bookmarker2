import React, { useReducer } from 'react';
import axios from 'axios';
import TagContext from './TagContext';
import TagReducer from './TagReducer';
import {
  GET_TAGS,
  ADD_TAGS,
} from '../types';

const API = axios.create({
    baseURL: `http://localhost:5000/tags`,    
});

const TagState = (props) => {
  let initialState = {
    tags: [],
  };

  const [state, dispatch] = useReducer(TagReducer, initialState);

  const getTags = async () => {
    try {
      let res = await API.get('/');
      let { data } = res;

      dispatch({ 
        type: GET_TAGS, 
        payload: data 
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addTags = async (tags) => { 
    dispatch({
      type: ADD_TAGS,
      payload: tags
    });
  }

  const initiateAddTags = async (tags) => {
    try {
      let res = await API.post('/add', {
        name: tags.name
      });
      let { data } = res;
      dispatch({ 
        type: ADD_TAGS, 
        payload: data 
      });
    }catch (error) {
      console.log(error.response + ' ' + error.response.data);
    }
  };

  return (
    <TagContext.Provider
      value={{
        tags: state.tags,      
        getTags,
        addTags,
      }}
    >
      {props.children}
    </TagContext.Provider>
  );
};

export default TagState;