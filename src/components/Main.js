import React from 'react';
import { getBooks } from '../services/mainService.js';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getBooks()
    .then((books) => {
      this.setState(() => ({ books }));
    });
  }

  render() {
    return (
      <article>
        <h2>There are {this.state.books.length} books</h2>
      </article>
    );
  }
}

export default Main;
