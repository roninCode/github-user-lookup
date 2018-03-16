import React from 'react';

const PrevPage = (props) => {
  return (
    <div onClick={props.getPrevPage}>
      <h2 className="page-arrows">{'<'}</h2>
    </div>
  )
}

export default PrevPage;