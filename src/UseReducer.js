import React, { useReducer } from 'react';


const INITIAL_STATE = { name: 'empty', age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <input type="button" onClick={() => {
        dispatch({ type: 'setName', name: 'ssking' });
      }}/>
    </div>
  );
}

export default UseReducer;