import React from 'react';
import User from './User';
import GetUserName from './GetUserName';
import Followers from './Followers';
import { fetchUserInfo, fetchUserFollowers } from '../utils/api';
import PrevPage from './PrevPage';
import NextPage from './NextPage';

export default class UserWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      user: "",
      userImage: null,
      followerCount: 0,
      followers: [],
      page: 1,
      pageTotal: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
  }

  mapFollower(follower) {
    return {
      id: follower.id,
      handle: follower.login,
      avatar_url: follower.avatar_url,
      github_url: follower.html_url
    }
  }

  handleSubmit(user){
    // Reset page
    const page = 1;

    fetchUserInfo(user).then(res => {
      this.setState({
        error: null,
        user: user,
        followerCount: res.followers,
        userImage: res.avatar_url,
        followerCount: res.followers,
        pageTotal: Math.ceil(res.followers / 30),
      })

      return this.updateFollowersPageState(user, page)
    }).catch((err) => {
      console.error(err);
      this.setState({
        error: err
      })
    })
  }

  handleReset(){
    this.setState({
      user: ""
    })
  }

  updateFollowersPageState(user, page) {
    return fetchUserFollowers(user, page)
      .then((res) => {
        const followers = res.map((follower) => this.mapFollower(follower))

        this.setState({
          followers,
          page
        })
      })
  }

  getPrevPage(){
    if(this.state.page > 1) {
      const user = this.state.user;
      const page = this.state.page - 1;

      this.updateFollowersPageState(user, page)
    }
  }

  getNextPage(){
    if(this.state.page < this.state.pageTotal) {
      const user = this.state.user;
      const page = this.state.page + 1;

      this.updateFollowersPageState(user, page)
    }
  }

  render(){
    if (this.state.error) {
      return (
        <div>
          <h2>Oh no, something went wrong! 💩</h2>
          <pre>
            {this.state.error.stack || this.state.error.toString()}
          </pre>
        </div>
      )
    }

    if(this.state.user === ""){
      return (
        <div>
          <GetUserName submitUser={this.handleSubmit} />
        </div>
      )
    } else {
      return (
        <div>
          <GetUserName submitUser={this.handleSubmit} reset={this.handleReset} />
          
          <User userName={this.state.user} userImage={this.state.userImage} followerCount={this.state.followerCount} reset={this.handleReset} page={this.state.page} />
          
          <div className="page-selectors">
            <PrevPage getPrevPage={this.getPrevPage} />
            <h3>Page {this.state.page}/{this.state.pageTotal}</h3>
            <NextPage getNextPage={this.getNextPage} />
          </div>

          <Followers followers={this.state.followers} changeUser={this.handleSubmit} />
        </div>
      )
    }
  }
}
