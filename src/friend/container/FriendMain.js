import React from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';

// 리팩터링 후
class FriendMain extends React.PureComponent {
  state = {
    friends: store.getState().friend.friends,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({ friends: store.getState().friend.friends }),
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };
  render() {
    console.log('FriendMain render');
    const friends = store.getState().friend.friends;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { friends: state.friend.friends }
}

const mapDispatchToProps = dispatch => {
  return {
    addFriend: friend => {
      dispatch(addFriend(friend));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendMain);
