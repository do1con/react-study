import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const OneTodo = ( props ) => {

  const [unmountState, setUnmountState] = useState(true);
  console.log(unmountState)

  const wrapper = useRef();

  const removeTodo = () => {
    let thisState = unmountState;
    setUnmountState(!thisState);
    console.log(unmountState);
    console.log('이건 여기');
    setTimeout(() => {
      console.log('느리게');
      props.removeTodo(props.index)
    }, 500 )
  }
  
  const animationEnd = () => {
    if(!show) setUnmountState(false);
  }

  return (
      <ListOne ref={wrapper} className={unmountState ? 'show' : 'hide'} onanimationend={animationEnd} >
        <Index>{props.index}</Index><DescText>{props.desc}</DescText>
        <DeleteButton type="button" value="X" onClick={removeTodo} />
      </ListOne>
  );
}

export default OneTodo;

const start = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  } to {
    opacity: 1;
    margin-top: 0px;
  }
`;

const end = keyframes`
  from{
    opacity: 1;
    margin-top: 0px;
  } to {
    opacity: 0;
    margin-top: -50px;
  }
`;

const ListOne = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: flex;
  border-bottom: 1px solid #111111;
  &.show{
    animation-name: ${start};
    animation-duration: 0.5s;
    animation-direction: normal;
  }
  &.hide{
    animation-name: ${end};
    animation-duration: 0.5s;
    animation-direction: normal;
  }
`;

const Index = styled.h4`
  display: block;
  width: 50px;
  height: 50px;
  text-align: center;
  color: #ffffff;
  background-color: #666666;
  line-height: 50px;
  font-size: 1.1em;
  margin: 0;
  font-weight: normal;
`;

const DescText = styled.p`
  display: block;
  width: 100%;
  background-color: #ffffff;
  color: #555555;
  font-weight: lighter;
  line-height: 50px;
  font-size: 1.2em;
  margin: 0;
`;

const DeleteButton = styled.input`
  display: block;
  width: 50px;
  height: 50px;
  background-color: #000000;
  font-weight: bold;
  line-height: 50px;
  font-size: 1.2em;
  margin: 0;
  color: #ffffff;
`;

