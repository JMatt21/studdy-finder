import React from "react";
import "./settingsComponents.css";
import head from '../../assets/head.jpg'

const profilePicture = () => (
  <div className="profile-picture-wrapper">
    <div></div>
    <div className="settings-profile-picture-wrapper">
      <img src={head} className="settings-profile-picture" />
    </div>
    <div></div>
    <div></div>
    <div className="settings-profile-link">
      <form>
        <div className="bubble">
          <div id="messaging-form">
            <div className="input-field">
              <input type="text"
                className="materialize-textarea"
                name="message"
                placeholder="Enter A New Link Here"
              />
            </div>
          </div>
        </div>
        <button className="circleButton" onClick={this.mSending}>Submit</button>
      </form>





    </div>
    <div></div>

  </div>
);

export default profilePicture;