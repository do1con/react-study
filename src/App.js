import React from 'react';
import Button from './button2';
import Box from './box1';
import Box3 from './box3';


function App() {
  return (
    <div>
      <Button size="big"></Button>
      <Button size="small"></Button>
      <Box size="big"></Box>
      <Box size="small"></Box>
      <Box3 size='big'></Box3>
      <Box3 size='small'></Box3>
    </div>
  );
}

export default App;
