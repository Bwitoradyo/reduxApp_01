"use strict"

//GET BOOKS
export const getBooks = () => {
  return{
    type:"GET_BOOKS"
  }
}

export const deleteBooks = (id) => {
  return {
   type: "DELETE_BOOK", 
   payload: id 
  }
}

export const updateBooks = (book) => {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
} 
