import React from 'react';
import { createStore, applyMiddleware } from 'redux';


const middleware1 = store => next => action => {
  console.log('middleware1 start');
  const result = next(action);
  console.log('middleware1 end');
  return result;
}

const middleware2 = store => next => action => {
  console.log('middleware2 start');
  const result = next(action);
  console.log('middleware2 end');
  return result;
}

const myReducer = (state, action) => {
  console.log('my Reducer');
  return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({ type: 'someAction' });


const App = () => {

  return (
    <div>
      <h4>콘솔, 소스를 보시오.</h4>
    </div>
  );

}

export default App;