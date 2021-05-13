import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super();
  }

  bookClicked(title) {
    console.log(`The book ${title} has been added to basket!`);
  }

  render() {
    return (
      <div className="book-list">
        {this.props.books.map((x) => {
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
