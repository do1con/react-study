import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactTransitionGroup from 'react-transition-group';

const OneTodo = ( props ) => {

  const listRef = useRef();

  useEffect(() => {
    listRef.current.style.opacity = 1;
    listRef.current.style.marginTop = 0;
  },[]);

  return (
    <ListOne ref={listRef}
              transitionName={listAnimation}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
      <Index>{props.index}</Index><DescText>{props.desc}</DescText><DeleteButton type="button" value="X"
       onClick={ () => props.removeTodo(props.index) }/>
    </ListOne>
  );

}

export default OneTodo;

const ListOne = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-top: -50px;
  text-align: center;
  background-color: #dddddd;
  display: flex;
  border-bottom: 1px solid #111111;
  opacity: 0;
  transition: opacity, margin-top, 0.5s;
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

