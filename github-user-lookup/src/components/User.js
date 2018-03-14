import React from 'react';
import ResetUserInput from './ResetUserInput';

export default class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userName: null,
      followerCount: 0,
      followers: []
    }
  }

  componentDidMount(){
    // First grab the github user
    let userInfo = {}

    console.log(this.props)
    fetch(`https://api.github.com/users/${this.props.userName}`, {method: 'GET', username: "roninCode", Authorization: 'token e77f62d5a65f8e8f262b70f46ee250a9d392d499'})
      .then(response => {
        return response.json();
      })
      .then(res => {
        let userName = res.login;
        let followerCount = res.followers;
        userInfo['userName'] = userName;
        userInfo['followerCount'] = followerCount;
        // Now has user and followers, send to userWrapper
        this.setState({
          userName,
          followerCount
        }) //Now grab the followers of that user
      }).then(fetch(`https://api.github.com/users/${this.props.userName}/followers?page=${this.props.page}`, {method: 'GET', username: "roninCode", Authorization: 'token e77f62d5a65f8e8f262b70f46ee250a9d392d499'})
        .then(followResp => {
          return followResp.json();
        })
        .then(folRes => {
          console.log(folRes);
          let followers = folRes.map((follower) => {
            return (
              <li className='followers-list__item' key={follower.id}>
                <span className='followers-list__handle'>{follower.login}</span> <span className='followers-list__seperator'>at</span> {follower.avatar_url}
              </li>
            )
          })
          let allFollowers = folRes.map((follower) => {
            return {
              handle: follower.login,
              url: follower.avatar_url
            }
          })
          this.setState({
            followers
          })
          userInfo['followers'] = allFollowers;
          this.props.getUserInfo(userInfo);
        })
      )
  }

  render(){
    return(
      <div>
        <h1>Username: {this.state.userName}</h1>
        <h1>Number of Followers: {this.state.followerCount}</h1>
        <h1>Followers:</h1>
        <ol className='followers-list'>{this.state.followers}</ol>
        <ResetUserInput reset={this.props.reset}/>
      </div>
    )
  }
}