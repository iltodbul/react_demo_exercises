import React, { useState } from 'react';
import { addBook } from '../services/mainService';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let book = {title, description};

  function onSubmitHandler(event) {
    event.preventDefault();
    addBook(book);
    alert(`New book ${title} added!`);
  }
  
  return (
    <>
      <h3>Create new book here with form</h3>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />

        <input type="submit" value="Add book" />
      </form>
    </>
  );
}
