import React from 'react';

const getFollowers = ((userName) => {
  let followers = {};
  fetch(`https://api.github.com/users/${userName}/followers`, {method: 'GET', username: "roninCode", Authorization: 'token e77f62d5a65f8e8f262b70f46ee250a9d392d499'})
        .then(response => {
          return response.json();
        })
        .then(folRes => {
          let allFollowers = folRes.map((follower) => {
            return {
              handle: follower.login,
              url: follower.avatar_url
            }
          })
          console.log('allllllll fooolllllooooowww', allFollowers)
          followers['all'] = allFollowers;
        })
        console.log('fol::::', followers['all'])
  return followers;
})

export default getFollowers;