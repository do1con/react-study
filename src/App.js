import React from 'react';
import produce from 'immer';

const person = { name: 'sskim', age: 24 };
const newPerson = produce(person, draft => {
  draft.age = 32;
});

const App = () => {

  return (
    <div>
      <h4>콘솔, 소스</h4>
    </div>
  );

}

export default App;