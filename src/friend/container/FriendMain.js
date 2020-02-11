import React, { useEffect, useForceUpdate, useState } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

const FriendMain = ( props ) => {
  const [refresh, forceUpdate] = useState(true);
  let unsubscribe;
  //componentDidMount
  useEffect(() => {
    unsubscribe = store.subscribe(() => forceUpdate());
    onAdd();
  }, []);
  
  //componentWillUnmount
  useEffect(() => () => {
   // unsubscribe();
  })
  let friend = getNextFriend();
  const onAdd = () => {
    friend = getNextFriend();
    store.dispatch(addFriend(friend));
    console.log('친구추가')
    forceUpdate(!refresh);
  }

  let friends;
  useEffect(() => {
    friends = store.getState().friend.friends;
    console.log(friends)
    console.log('rerender')
  });

  const forDebug = () => {
    console.log(store.getState().friend)
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <button onClick={forDebug}>버그추가</button>
      <button onClick={forceUpdate}>렌더</button>
      <FriendList friends={friend} />
    </div>
  );
}

export default FriendMain;