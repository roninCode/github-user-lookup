const accessToken = 'cf9dfd9f76f046235593705c31cb645587ed3b1d';

export function fetchUserInfo(userName) {
  return fetch(`https://api.github.com/users/${userName}?access_token=${accessToken}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching user")
      }
      return response.json();
    })
}

export function fetchUserFollowers(userName, page) {
  return fetch(`https://api.github.com/users/${userName}/followers?page=${page}&access_token=${accessToken}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching followers")
      }
      return response.json();
    })
}
