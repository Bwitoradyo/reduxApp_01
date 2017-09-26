"use strict"
//IMPORT REACT

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import reducers from "./reducers/index";
import {postBooks, updateBooks, deleteBooks} from "./actions/booksActions";
import {addToCart} from "./actions/cartActions";

const middleware = applyMiddleware(logger);


//CREATE STORE
const store = createStore(reducers, middleware);

//IMPORT COMPONENTS

//RENDER THE COMPONENT

//Dispatch POST BOOKS
store.dispatch(postBooks(			
  [
    {
      _id: 1,
      title: "First book title",
      description: "First book description",
      price: 33.33
    },{
      _id: 2,
      title: "Second book title",
      description: "Second book description",
      price: 50
    }  
     
  ]			
))

//DISPATCH DELETE BOOKS
store.dispatch(deleteBooks(
  {_id : 1}			
));

//DISPATCH UPDATE BOOKS
store.dispatch(updateBooks(
  {
    _id: 2,
    title: "Sumologic Of Course"
  }			
))

//DISPATCH ADD TO CART
store.dispatch(addToCart(
  [{_id:1}]			
));
