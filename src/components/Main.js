import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
    };
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
      <article>
        <h2>There are {this.state.books.length} books</h2>
      </article>
    );
  }
}

export default Main;
