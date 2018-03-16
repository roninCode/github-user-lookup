import React from 'react';
import ResetUserInput from './ResetUserInput';

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
        <form className="text-form" onSubmit={this.handleSubmit}>
          <label>
            <p>Enter a GitHub UserName to Begin</p>
            <input className="input__text-field" type="text" name="userName" onChange={this.handleChange}/>
            <button className="submit-form" type="submit">Submit</button>
            
            <ResetUserInput reset={this.props.reset}/>
          </label>
        </form>
      </div>
    )
  }
}