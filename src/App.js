import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';




function App() {
  return (
    <body>
        <div>
            <div className="profile-photo">
              <ProfilePhoto />
            </div>
            <div className="full-name">
              <FullName />
            </div>
            <div className="address">
              <Address />
            </div>
        </div>
    </body>
    
  );




}

export default App;
