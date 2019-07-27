import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
        {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
        <h3>WE RAISEN</h3>
        <p><input className="login-input" type="text" placeholder="enter you username" /></p>
        <p><input className="login-input" type="password" placeholder="enter password" /></p>
        <p><input className="login-button" type="submit" value="Login" /></p>
        {/* <input type="text" ref="username" placeholder="enter you username" /> */}
        {/* <input type="password" ref="password" placeholder="enter password" /> */}
        {/* <input type="submit" value="Login" /> */}
      </form>
    </div>
  );
}

export default App;
