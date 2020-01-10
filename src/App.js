/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

function Home({ match }) {
  return <h2>홈</h2>;
}

function Photo({ match }) {
  return <h2>사진</h2>;
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: '5px solid gray' }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/Photo">사진</Link>
          <br />
          <Link to="/Rooms">방 소개</Link>
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/Photo" component={Photo} />
          <Route path="/Rooms" component={Rooms} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
