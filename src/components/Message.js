import { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super();

    this.state = {
      name: 'Peter',
    };

    console.log('Constructor');
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    setTimeout(() => {
      this.setState({ name: 'Gosho' });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate');
    this.render();
  }

  render() {
    console.log('Render');
    const myStyle = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial',
    };

    return (
      <div className="Site-footer">
        <p>
          React App is Great and {this.state.name} have that grade --{'>'}{' '}
          {this.state.name === 'Peter' ? 2 ** 2 : 'Nooo'}.
        </p>
        <strong style={myStyle}>HoHoHo</strong>
      </div>
    );
  }
}

export default Message;
