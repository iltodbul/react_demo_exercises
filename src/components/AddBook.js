import React, { Component } from 'react';
import { addBook } from '../services/mainService';

export default class AddBook extends Component {
  constructor(props) {
    super();

    this.state = {
      title: '',
      description: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    addBook(this.state);
    alert(`New book ${this.state.title} added!`);
    
  }

  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <>
        <h3>Create new book here with form</h3>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.onChangeHandler}
          />

          <input type="submit" value="Add book" />
        </form>
      </>
    );
  }
}
