import React, { Component } from 'react';
import UpdateEmailFormContainer from '../containers/UpdateEmailFormContainer';
import ProfileCardContainer from '../containers/ProfileCardContainer';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Profile</h2>

          <div className='well'>
            <ProfileCardContainer />
          </div>
          <div className='well'>
            <UpdateEmailFormContainer />
          </div>

        </div>
      </div>
    );
  }
}


export default Profile;
