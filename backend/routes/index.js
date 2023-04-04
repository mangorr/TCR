const {expressjwt: jwt} = require('express-jwt');
const jwksRsa  = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz')
var request = require("request");
var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require("axios");
const authConfig = require("./auth_config.json")

/** this is for checking accessToken and it will check the headers sent from the frontend.
(that means, in the frontend, you need to pass in the correct header for authentication) */
const authorizeAccessToken = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256']
})

/** this means, only if this user is assigned with read:messages permission,
   he can then access to the endpoint which use this checkPermissions.
   In further implementation, we should, for example, create checkPermission1,
   checkPermission2, etc. and use them in corresponding endpoint respectively.
*/
const checkPermissions = jwtAuthz(["read:message"], {
  customScopeKey: 'permissions'
})

// the endpoint of /readNews which include both the authorizeAccessToken
// and checkPermissions in this endpoint for authentication
router.get('/readNews', authorizeAccessToken,checkPermissions,
    function(req, res, next) {
  res.status(200).send('backend homepage')
});

// const checkPermissionsWrite = jwtAuthz(["write:message"], {
//   customScopeKey: 'permissions'
// })
//
// // the endpoint of /readNews which include both the authorizeAccessToken
// // and checkPermissions in this endpoint for authentication
// router.get('/writeNews', authorizeAccessToken,checkPermissionsWrite,
//     function(req, res, next) {
//       res.status(200).send('backend homepage')
// });


module.exports = router;
