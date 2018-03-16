import React from 'react';

const NextPage = (props) => {
  return (
    <div>
      <h2 className="page-arrows" onClick={props.getNextPage}> {'>'} </h2>
    </div>
  )
}

export default NextPage;