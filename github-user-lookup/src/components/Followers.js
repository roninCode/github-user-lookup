import React from 'react';

export default class Followers extends React.Component{
  constructor(props){
    super(props);

    this.selectNewUser = this.selectNewUser.bind(this);
  }

  selectNewUser(event){
    const userName = event.currentTarget.dataset.id;
    this.props.changeUser(userName);
  }

  render(){
    let followers = this.props.followers.map((follower) => {
      return (
        <li onClick={this.selectNewUser.bind(this)} data-id={follower.handle} className='followers-list__item' key={follower.id}>
          <img className="followers-list__image" alt={follower.handle} src={follower.avatar_url} />
          <span className='followers-list__handle'><span> {follower.handle}</span></span> 
          <span className='followers-list__seperator'> at</span> {follower.github_url}
        </li>
      )
    })

    return(
      <div className="user-followers">
        <h1>Followers:</h1>
        <ol className='followers-list'>{followers}</ol>
      </div>
    )
  }
}