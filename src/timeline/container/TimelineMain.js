import React, { useEffect, useForceUpdate } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from '../component/TimelineList';

const TimelineMain = ( props ) => {
  
  const forceUpdate = useForceUpdate;
  let unsubscribe;

  //componentDidMound
  useEffect(() => {
    unsubscribe = store.subscribe(() => forceUpdate);
  }, []);
  
  //componentWillUnmount
  useEffect(() => () => {
    unsubscribe();
  });

  const onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }

  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}

export default TimelineMain;