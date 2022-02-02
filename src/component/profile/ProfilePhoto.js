import React from 'react';
import X from "./1.jpeg";
import Y from "./2.jpeg";


function ProfilePhoto() {
  return <div>
      <h2 className='title'>WELCOME TO OUR WEBSITE</h2>
      <br></br>
      <img className='fond' src={X}/>
  </div>;
}

export default ProfilePhoto;
