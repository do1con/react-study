import React, { useState,useEffect } from 'react';
import { useWindowWidth } from './customHook';

export default function App () {
  const width = useWindowWidth();
  const {name, setName} = useState('');
  /*window.addEventListener('resize', function(){
    this.console.log(width);
  }) */
  useEffect(() => {
    console.log('re render');
  });
  return (
    <div>
      <p>{`name is ${name}`}</p>
      {`width = ${width}`}
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
  );
}