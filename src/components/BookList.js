import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
    };
  }

  bookClicked(title) {
    console.log(`The book ${title} has been added to basket!`);
  }

  componentDidMount() {
    fetch('http://localhost:3001/books')
      .then((res) => res.json())
      .then((books) => {
        this.setState(() => ({ books }));
      });
  }

  render() {
    return (
      <div className="book-list">
        {this.state.books.map((x) => {
          return (
            <Book
              title={x.title}
              description={x.description}
              clickHandler={() => this.bookClicked(x.title)}
            />
          );
        })}
      </div>
    );
  }
}

export default BookList;
