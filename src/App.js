import React, { useMemo } from 'react';
import { User } from './Ver1';
import { User2 } from './Ver2';


const App = () => {

  const value = useMemo(() => {

  });

  return (
    <div>
      <h3>ver 1 ( useEffect, useState 만으로 만든 것 )</h3>
      <User />
      <h3>ver 2 ( useMemo를 활용한 것 )</h3>
      <User2 />
    </div>
  );

}

export default App;