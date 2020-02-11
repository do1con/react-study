import React from 'react';

const FriendList = ({ friends }) => {
  console.log(friends)
  return (
    <ul>
      <li key={friends.age}>{friends.name}</li>
    </ul>
  );
}

export default FriendList;