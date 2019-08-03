import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: '',
    body:'Padrão'
  };

  //origin
  /* componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  } */

  //T-1.0
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  //origin
  /* callApi = async () => {
    const response = await fetch('/api/mensagem');
    //const response = await fetch('/filmes');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }; */
  
  callApi = async () => {
    //const response = await fetch('/api/mensagem');
    const response = await fetch('/filmes');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    //Teste F
    /* let state = this.state;
				state.body = await response.json();
				this.setState(state); */
    //<
    return body;
  };

  /* render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  } */

  //T-1.0
  render() {
    return (
      <div className="App">
        <h1>Teste</h1>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  } 
}

export default App;