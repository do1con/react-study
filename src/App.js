import React, { useRef } from 'react';


const App = () => {
  const boxRef = useRef(null);
  const onClick = () => {
    boxRef.current.style.width =  200 + "px";
    console.log(boxRef.current.width);
  };
  return (
    <div>
      <div className="box" style={{width: "500px", height: "500px", backgroundColor: "red", transition: "all 0.5s"}} ref={boxRef} onClick={onClick}></div>
    </div>
  );
}

export default App;