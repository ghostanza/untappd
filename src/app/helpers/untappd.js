var axios = require('axios'),
    api = 'https://api.untappd.com/v4';

/*** USER ***/
module.exports.getUserInfo = (token) => {
  if(token){
    return axios.get(`${api}/user/info?access_token=${token}`);
  }
  else{ return Promise.resolve(''); }
}
