import React from 'react';

export default class GetUserName extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      userName: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ 
      userName: event.target.value 
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.submitUser(this.state.userName);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a GitHub UserName to Begin:
            <input type="text" name="userName" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}