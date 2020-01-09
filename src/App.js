import React, { Component } from 'react'

class App extends Component {
  state = {
    pageName: ''
  };
  componentDidMount () {
    window.onpopstate = event => {
      this.onChangePage(event.state);
      console.log(this.state);
      console.log(window.history);
    }
  }
  onChangePage = pageCode => {
    this.setState({pageName: pageCode});
  }
  onClick1 = () => {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    this.onChangePage(pageName);
  }
  onClick2 = () => {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    this.onChangePage(pageName);
  }
  render() {
    const { pageName } = this.state;
    return (
      <div>
        <button onClick={this.onClick1}>page1</button>
        <button onClick={this.onClick2}>page2</button>
        {!pageName&&<Home/>}
        {pageName === 'page1' && <Page1 />}
        {pageName === 'page2' && <Page2 />}
      </div>
    )
  }
}
function Home () {
  return <h2>원하는 곳 클릭</h2>;
}
function Page1 () {
  return <h2>page2</h2>;
}
function Page2 () {
  return <h2>page1</h2>;
}

export default App;
