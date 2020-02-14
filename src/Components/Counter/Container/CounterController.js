import React from 'react';
import Store, { IncreaseCount, DecreaseCount } from '../../../Logics/Store';
import { connect } from 'react-redux';


const CounterController = ( props ) => {
  console.log (props);
  console.log (typeof(props.dispatchIncreaseCount));
  return(
    <div id="historyghihi">
      <input type="text" disabled value={props.Store} />
      <input type="button" value="추가" onClick={ props.dispatchIncreaseCount } />
      <input type="button" value="감소" onClick={ props.dispatchDecreaseCount } />
    </div>
  );
}

const mapStateToProps = (state) => ({ Store: state.count });
const mapDispatchToProps = (dispatch) => ({ 
  dispatchIncreaseCount: () => dispatch(IncreaseCount()),
  dispatchDecreaseCount: () => dispatch(DecreaseCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterController);
