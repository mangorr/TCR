import React, { useRef, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// const config = require('../../../../config.js');


var LoginPage = function() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    !isAuthenticated &&
    <div>
      <div onClick={() => loginWithRedirect({ target: 'http://localhost:3000'})}>Log In</div>
    </div>



  )
}

export default LoginPage