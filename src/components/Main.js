import React from 'react';
import { Link } from 'react-router-dom';

import { getBooks } from '../services/mainService.js';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getBooks().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  render() {
    return (
      <Link to="/book">
        <article>
          <h2>There are {this.state.books.length} books</h2>
        </article>
      </Link>
    );
  }
}

export default Main;
