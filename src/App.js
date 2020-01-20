import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import Profile from './useHook';
//import useWindowWidth from './useWindowWidth';

const getValue = (values) => values;

export default class App extends Component {
  
  render() {
    const theHtml = ReactDOMServer.renderToStaticMarkup(<Profile />);
    console.log(theHtml);
//    const theHtml2 = reactDOM.render(<Profile />);
//    console.log(theHtml2);
    return (
      <div>
        <Profile getValue={getValue}/>
        <br />
      </div>
    );
  }
}