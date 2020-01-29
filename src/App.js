import React, { useState, useEffect, createContext, useContext } from 'react';
import { useWindowWidth } from './customHook';
import ParentComponent from './contextHook';

const C_LoginContext = createContext('not logined');

const App = () => {
  const login = useContext(C_LoginContext);
  const width = useWindowWidth();
  const {name, setName} = useState('');
  useEffect(() => {
    console.log('re render');
  });
  return (
    <div>
      <p>{`name is ${name}`}</p>
      {`width = ${width}`}
      <input type="text" value={name} />
      <br/>
      and you are `{login}`
      <br/>
      <input type="button" value="login"/>

      <ParentComponent />
    </div>
  );
}

export default App;