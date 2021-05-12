import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <article>
        <h2>There are {this.props.count} books</h2>
      </article>
    );
  }
}

export default Main;
