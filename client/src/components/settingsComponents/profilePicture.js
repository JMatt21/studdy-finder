import React from "react";
import "./settingsComponents.css";
import head from '../../assets/head.jpg'

class ProfilePicture extends React.Component {

  render() {
    return (
      <div className="profile-picture-wrapper">

        <div></div>

        <div className="settings-profile-picture-wrapper">
          <div className="settings-profile-picture">
            <img src={head} width="250px" height="250px" />
          </div>
          <h4 className="display-text-settings-profile-picture">Enter A link To Your New Profile Picture Here</h4>
          <p className="display-text-settings-profile-picture">
            (We recommond that your profile picture is 250px x 250px to ensure proper sizing)</p>

        </div>


        <div></div>
        <div></div>



        <div className="settings-profile-link">
          <form className="settings-link-form-wrapper">
            <div className="bubble">
              <div id="messaging-form">
                <div className="input-field">
                  <input type="text"
                    className="materialize-textarea"
                    name="message"
                    placeholder="Enter A New Link Here" />
                </div>
              </div>
            </div>
            <button className="circleButton">Submit</button>
          </form>



        </div>

        <div></div>





      </div>


    );
  }
}



export default ProfilePicture;