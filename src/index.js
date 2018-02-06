import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function onClick() {
  alert('clicked');
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount = () => {
    setTimeout(this.show, 5000);
  }

  show = () => {
    let evt = document.createEvent('event');
    alert(evt);
    this.setState({
      show: true
    });
  }
  render() {
    let link2 = this.state.show ? <div onClick={onClick}>Click Here</div> : null;
    return (
      <div className="App">
          <div onClick={onClick}>Click Here</div>
          <hr/>
          {link2}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
