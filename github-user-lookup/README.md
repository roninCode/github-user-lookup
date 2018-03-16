# GitHub User Lookup

## Site Demo on [Netflify](https://friendly-brown-22842b.netlify.com/)

## Usage
* Lookup a GitHub user by their UserName
  * Retreives user's follower count and a list of their followers
* Includes pagination for multiple followers
  * Uses the GitHub API default limit 30
* Click on a follower to see their information and followers

## Setup
1. Clone or Fork
2. `npm install`
3. `npm start`

## Build
`npm run build`

### Be Kind!
Get your own [access key](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and replace the `accessToken` in utils/api.js 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).