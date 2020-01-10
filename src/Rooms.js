/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Link } from 'react-router-dom';

function Room({ match }) {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}

// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line react/prop-types
export default function Rooms({ match }) {
  return (
    <div>
      <h2>방 소개</h2>
      <Link to={`${match.url}/redRoom`}>빨간 방</Link>
      <br />
      <Link to={`${match.url}/blueRoom`}>파란 방</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h3>방 선택</h3>} />
    </div>
  );
}
