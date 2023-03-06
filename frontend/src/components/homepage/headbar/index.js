import React from 'react';
import LoginPage from './auth/LoginPage';
import LogoutPage from './auth/LogoutPage';
// import Profile from './auth/Profile';


function HeadBar() {
  return (
    <div className="headBar-container">

      <div className='headBar-item'>About</div>
      <div className='headBar-item'>Consulting Service</div>
      <div className='headBar-item'>CyberSleuth Spider</div>
      <div className='headBar-item'>CARET</div>
      <div className='headBar-item'>News and Event</div>
      <div className='headBar-item'>
        <LoginPage/>
        <LogoutPage/>
        {/* <Profile/> */}
      </div>

    </div>
  );
}

export default HeadBar;
