import React from 'react';

const getUserInfo = ((userName) => {
  let userInfo = {};
  fetch(`https://api.github.com/users/${userName}`, {method: 'GET', username: "roninCode", Authorization: 'token e77f62d5a65f8e8f262b70f46ee250a9d392d499'})
      .then(response => {
        return response.json();
      })
      .then(res => {
        let userName = res.login;
        let followerCount = res.followers;
        userInfo['userName'] = userName;
        userInfo['followerCount'] = followerCount;
      });
  return userInfo;
})

export default getUserInfo;