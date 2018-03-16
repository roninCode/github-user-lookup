import React from 'react';

const ResetUserInput = ({reset}) => {
  const shouldDisplay = reset;

  return(
    <div>
      {shouldDisplay ? 
        (<button onClick={reset}>Reset</button>) 
      :
        (null)
      }
    </div>
  )
}

export default ResetUserInput;