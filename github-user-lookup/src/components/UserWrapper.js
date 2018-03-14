import React from 'react';
import User from './User';
import GetUserName from './GetUserName';
import ShowUser from './ShowUser';
import getUserInfo from '../utils/getUserInfo';
import getFollowers from '../utils/getFollowers';

export default class UserWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputUser: "",
      foundUser: "",
      followerCount: 0,
      followers: [],
      page: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  handleSubmit(input){
    let userInfo = getUserInfo(input);
    let followers = getFollowers(input);
    console.log('follllllllooooooowww', followers)
    console.log('follllllllooooooowww', followers['all'])
    this.setState({
      inputUser: input,
      foundUser: userInfo['foundUser'],
      followerCount: userInfo['followerCount'],
      followers: followers['all']
    })
  }

  handleReset(){
    this.setState({
      inputUser: ""
    })
  }

  getNextPage(){
    this.setState({
      page: this.state.page + 1
    })
    console.log(`And now the page is: ${this.state.page}`)
  }

  getUserInfo(info){
    console.log('info:', info);
    this.setState({
      foundUser: info['userName'],
      followerCount: info['followerCount'],
      followers: info['followers']
    })
  }

  render(){
    if(this.state.inputUser === ""){
      return (
        <div>
          <GetUserName submitUser={this.handleSubmit} />
        </div>
      )
    } else {
      return (
        <div>
          <GetUserName submitUser={this.handleSubmit} />
          <User userName={this.state.inputUser} reset={this.handleReset} getUserInfo={this.getUserInfo} page={this.state.page} />
          <ShowUser foundUser={this.state.foundUser} followerCount={this.state.followerCount} />
          
          <button onClick={this.getNextPage}>Next Page</button>
        </div>
      )
    }
  }
}