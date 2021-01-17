import {
    GET_TAGS,
    ADD_TAGS
 } from '../types';
 
 export default (state, action) => {
   const { payload, type } = action;
 
   switch (type) {
     case GET_TAGS:
       return {
         ...state,
         tags: payload,
       };  
 
     case ADD_TAGS:
       return {
         ...state,
         tags: [...state.tags, action.payload],
       };

     default:
       return state;
   }
 };