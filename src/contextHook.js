import React, { createContext, useContext } from 'react';
import ChildrenComponent from './childrenHook';

const values = {
  name: 'ss',
  age: 24
}
export const Idont = createContext(null);
const ParentComponent = () => {
  
  return (
    <Idont.Provider value={values}>
      <div>
        <h2>부모 컴포넌트가 전역 상태(Context)를 만들었읍니다.</h2>
        <ChildrenComponent />
      </div>
    </Idont.Provider>
  );
};

export default ParentComponent;
