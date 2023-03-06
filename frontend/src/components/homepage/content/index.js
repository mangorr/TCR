import React, { useRef, useEffect, useState } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


function Content() {
  // this is to generate the token to identify who this user is and what permission he has
  const {getAccessTokenSilently} = useAuth0();

  // this line of code is just for seting the button for testing
  const [isAuthClick, setIsAuthClick] = useState(false)

  // this function will be called once the button is clicked.
  const handleClick = async function() {


    try {
      const accessToken = await getAccessTokenSilently()
      // this is for debug, we can see the access token generated and test in the JWT website to check whether this user have the correct permission manully
      console.log('get token!!! ', accessToken)
      var config = {
        method: 'get',
        // the endpoint we want to access. it's corresponding to this backend endpoint:
        // router.get('/readNews', authorizeAccessToken,checkPermissions, function(req, res, next) {
        //   res.status(200).send('backend homepage')
        // });
        url: `http://localhost:8000/readNews`,
        // put the token here to pass to the backend
        headers: {Authorization: `Bearer ${accessToken}`}
      };
      // use axios to connect to the backend
      axios(config)
        // if this user have the access to the endpoint, then theoratically, the backend will return a 200 status code and the line here will be executed.
        .then(function(res) {
          setIsAuthClick(true)
        })
        // if this user doesn't have the access to the endpoint, then theoratically, the backend will not return a 200 status code and the line here will be executed.
        .catch(function(err) {
          console.log('err!', err)
        })

    } catch (err) {
      console.log('bug!', err)
    }


  }
  return (
    <div className="content-container">
      <img className='content-photo' src={require("../../../frontPhoto.jpeg")} alt="not found"/>
      <Profile/>
      <div>Hello! This is TCR front page</div>
      <div>
        <button onClick={handleClick}>role based auth</button>
      </div>
      {isAuthClick && (
        <div>Only Admin role are authorized to see the content below</div>
      )}


    </div>
  );
}

export default Content;
