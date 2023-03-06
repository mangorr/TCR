import React, { useRef, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

var LogoutPage = function() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated &&
    <div>
      <div onClick={() => logout({ returnTo: 'http://localhost:3000' })}>
        Log Out
      </div>

    </div>



  )
}

export default LogoutPage