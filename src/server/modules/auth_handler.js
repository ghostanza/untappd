var url = require('url'),
    request = require('request'),
    path = require('path');

module.exports.tokenRequest = (code, type, res, req) => {
  var params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_url=${process.env.REDIRECT_URL}&code=${code}`;
  request.get(`https://untappd.com/oauth/authorize/${params}`, (err, response, body) => {
    var body = JSON.parse(body),
        token = body.response && body.response.access_token ? body.response.access_token : '';
    if(token!='undefined' && token.length){
      res.cookie('ut_token', token, {httpOnly: false});
      res.redirect(`/api/v1/token?t=${token}`);
    }
  });
}
