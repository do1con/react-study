import React, { Component } from 'react';

const UserContext = React.createContext('unknown');

export default class App extends Component {

  state = [
    {
      title: 'hi',
      pri: 'low'
    },
    {
      title: 'hello',
      pri: 'high'
    }
  ];

  componentDidMount (){
    const { prevState } = this.state;
    const copy = this.state;
    console.log(this.state);
    console.log(copy);
    copy.push({ title: 'bye', pri: 'middle' });
    this.setState({ copy });
    console.log( prevState === this.state );
  }

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