import React from 'react';

const ShowUser = ({...props, foundUser, followerCount}) => (
  <div>
    <h2>UserName: {foundUser}</h2>
    <h2>Follower Count: {followerCount}</h2>
  </div>
)

export default ShowUser;