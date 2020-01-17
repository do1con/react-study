import React, { Component } from 'react';

const withMessage = (message) => (WrappedComponent) => { 
  // 이렇게 하는 이유는 여러개의 HOC를 합칠때 편하기 때문
  return class extends Component { // 익명이어도 된다

    state = {
      messages: 'loading'
    } // 처음엔 없다가

    componentDidMount() {
      this.setState({ messages: message });
    } // 마운트 후 있으면 스테이트를 준다. 

    render() {
      return (
        <WrappedComponent message={ this.state.messages } />
      )
    }
  }
}

export default withMessage;