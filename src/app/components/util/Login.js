import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props)
  }
  login() {
    var width = 450,
        height = 730,
        that = this;
    window.addEventListener('message', function(e){
      if(e.data){
        var data = JSON.parse(e.data);
        if(data.access_token){
          that.props.grant(data.access_token);
        }
      }
    });
    var w = window.open('https://untappd.com/oauth/authenticate/?client_id=555DCDF0BCC8FB99C4320A85D5D134B339F97832&response_type=code&redirect_uri=http://localhost:8080/api/v1/callback', "Untappd", 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height);
  }
  render() {
    return(
        <div className='login-btn' onClick={this.login.bind(this)}>Click to Get Started</div>
    )
  }
}
