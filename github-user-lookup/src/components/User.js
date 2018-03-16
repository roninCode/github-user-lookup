import React from 'react';
import ResetUserInput from './ResetUserInput';

const User = ({...props}) => {
  return(
    <div className="user-container">
       <div className="user-image">
         <img alt={props.userName} src={props.userImage} />
       </div>
       <div className="user-info">
         <h2>Username: {props.userName}</h2>
         <h2>Number of Followers: {props.followerCount}</h2>
       </div>
     </div>
  )
}

export default User;