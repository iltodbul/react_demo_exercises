import React, { useState } from 'react';
import { addBook } from '../services/mainService';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const book = {title, description};

  function onSubmitHandler(event) {
    event.preventDefault();
    addBook(book);
    alert(`New book ${title} added!`);
  }

  function onChangeHandler(event) {
    setTitle(event.target.value);
    setDescription(event.target.value);
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
          onChange={onChangeHandler}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={onChangeHandler}
        />

        <input type="submit" value="Add book" />
      </form>
    </>
  );
}
