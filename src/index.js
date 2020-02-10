import { createStore, combineReducers } from 'redux';
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend
} from './friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id:1, desc: '왜 이렇게 어렵지' }));
store.dispatch(addTimeline({ id:2, desc: '뭐이리 쓸게 많지' }));
store.dispatch( increaseNextPage() );
store.dispatch(editTimeline({ id:2, desc: '리덕스 왜이리 어렵지' }));
store.dispatch(removeTimeline({ id: 1, desc: '왜 이렇게 어렵지' })); 

store.dispatch(addFriend({ id: 1, name: '고고소' }));
store.dispatch(addFriend({ id: 2, name: '가가미' }));
store.dispatch(editFriend({ id: 2, name: '가가미2' }));
store.dispatch(removeFriend({ id: 1, name: '고고소' }));