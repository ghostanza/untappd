var express = require('express'),
    router = express.Router(),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    request = require('request'),
    auth_handler = require('../modules/auth_handler');
// API routes
router.get('/api/v1/:endpoint', (req,res,next) => {
  var endpoint = req.params.endpoint || '';
    switch(endpoint){
      case 'callback':
        var code = req.query.code;
        auth_handler.tokenRequest(code, 'initial', res, req);
        break;
      case 'token':
        // auth_handler.tokenRequest will redirect to token?t=
        res.sendFile(path.join(__dirname, '../../../public/auth_proxy.html'));
        break;
      default:
        //logger.log_404(req);
        res.status(404);
        res.send("CANNOT FIND ENDPOINT");
        break;
    }
})

// main app
router.get(['/'], (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});

module.exports = router;
