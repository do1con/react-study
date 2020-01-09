import React from "react";
import styled from 'styled-components';

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;
const BoxBig = styled(BoxCommon)`
  width: 200px;
`;
const BoxSmall = styled(BoxCommon)`
  width: 100px;
`;

const BoxBigClickHandler = () => {
  console.log('big box');
}
const BoxSmallClickHandler = () => console.log('small box');

function Box({ size }) {
  return size === 'big' ? <BoxBig onClick={BoxBigClickHandler}>큰 박스</BoxBig> : <BoxSmall onClick={BoxSmallClickHandler}>작은 박스</BoxSmall>;
}
export default Box;
