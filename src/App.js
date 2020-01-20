import React, { Component } from 'react';

const UserContext = React.createContext('unknown');

export default class App extends Component {

  render() {
    return (
      <div>
        <UserContext.Provider value="mike">
          <div>상단</div>
          <Profile />
          <div>하단</div>
        </UserContext.Provider>
      </div>
    );
  }
}

function Profile(){
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting(){
  return (
    <UserContext.Consumer>
      {username => <p>{`${username}님 안녕하세요`}</p>}
    </UserContext.Consumer>
  );
}