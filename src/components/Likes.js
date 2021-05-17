import { Component } from 'react';

class Likes extends Component {
  constructor(props) {
    super();

    this.state = {
      like: 0,
    };

    this.reset = this.reset.bind(this);
  }

  decrementLikes(e) {
    this.setState({ like: this.state.like - 1 });
  }

  reset(e) {
    this.setState({ like: 0 });
  }

  render() {
    return (
      <div className="counter">
        <span>
          {this.state.like >= 0 ? 'Likes: ' : 'Dislikes: '} {this.state.like}
        </span>
        <button
          onClick={(e) =>
            this.setState((oldState) => ({
              like: oldState.like + 1,
              test: 'Test',
            }))
          }
        >
          +
        </button>

        <button onClick={this.decrementLikes.bind(this)}>-</button>

        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Likes;
