import React, { useContext } from 'react';
import {Idont} from './contextHook';

const ChildrenComponent = () => {
  const gotContext = useContext(Idont);
  console.log(gotContext);
  console.log('hi');
  return (
    <h3>{ gotContext.name }</h3>
  );
};

export default ChildrenComponent;