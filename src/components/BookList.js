import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="book-list">
        {this.props.books.map((x) => {
          return <Book title={x.title} description={x.description} />;
        })}
      </div>
    );
  }
}

export default BookList;
