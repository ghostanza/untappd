import React from 'react';
import Login from './util/Login';
import Main from './pages/Main';

export default class App extends React.Component {
  constructor(props){
    super(props);
    var token = document.cookie.match(/.*ut_token=(.*);?/) ? document.cookie.match(/.*ut_token=(.*);?/)[1] : '';
    if(token){
      this.state = {
        token
      }
    }
    else{
      this.state = {}
    }
  }
  updateToken(t){
    this.setState((prev, p)=>{
      return({token: t});
    })
  }
  render() {
    return(
      <div id="main-container">
        { this.state.token ? (<Main token={this.state.token} />) : (<Login grant={this.updateToken.bind(this)}/>)}
      </div>);
  }
}
