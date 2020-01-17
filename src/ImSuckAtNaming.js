import React from 'react';
import withMessage from './withMessage';

function ImSuckAtNaming(props) {
  const gotMessage = props.message;

  return (
    <div className="dd">
      {gotMessage}
    </div>
  )
}

export default withMessage('hi')(ImSuckAtNaming);