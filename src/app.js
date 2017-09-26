"use strict"
//IMPORT REACT

import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import reducers from "./reducers/index";
import {updateBooks, deleteBooks} from "./actions/booksActions";

const middleware = applyMiddleware(logger);


//CREATE STORE
const store = createStore(reducers, middleware);

//IMPORT COMPONENTS

//RENDER THE COMPONENT
