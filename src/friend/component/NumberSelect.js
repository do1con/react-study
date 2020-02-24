import React from 'react';
import { connect } from 'react-redux';

class NumberSelect extends React.Component {
  
  onChange = (e) => {
    const value = Number(e.currentTarget.value);
    this.props.onChange(value);
  }

}

mapStateToProps = state => {

}

mapDispatchToProps = dispatch => {

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberSelect)