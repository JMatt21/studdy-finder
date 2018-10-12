import React from "react";
import "./profilePicture.css";
import head from '../../assets/head.jpg'
import { Animated } from "react-animated-css";

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: "profile-picture-wrapper-1"
    };

  }


  changeBackgroundInput = (e) => {
    e.preventDefault();

    if (this.state.newClass === "profile-picture-wrapper-1") {
      this.setState({
        newClass: "profile-picture-wrapper-2"
      });

    }
  }

  changeBackground = (e) => {
    e.preventDefault();

    if (this.state.newClass === "profile-picture-wrapper-2") {
      this.setState({
        newClass: "profile-picture-wrapper-1"
      });

    }

  }



  render() {





    return (

      <div onClick={this.changeBackground} className={this.state.newClass}>

        <div></div>
        <Animated animationIn="fadeIn">
          <div className="settings-profile-picture-wrapper">
            <div className="settings-profile-picture">
              <img src={head} width="250px" height="250px" />
            </div>

            <h4 className="display-text-settings-profile-picture">Enter A link To Your New Profile Picture Here</h4>
            <p className="display-text-settings-profile-picture">
              We recommond that your profile picture is 250px x 250px to ensure proper sizing</p>


          </div>
        </Animated>

        <div></div>
        <div></div>


        <Animated animationIn="fadeIn">
          <div className="settings-profile-link">
            <form className="settings-link-form-wrapper">
              <div className="bubble">
                <div id="messaging-form">
                  <div className="input-field">
                    <input onClick={this.changeBackgroundInput}
                      type="text"
                      className="materialize-textarea"
                      name="message"
                      placeholder="Enter A New Link Here" />
                  </div>
                </div>
              </div>
              <button className="circleButton" onClick={this.changeBackground}>Submit</button>
            </form>
          </div>
        </Animated>

        <div></div>

      </div>


    );
  }
}



export default ProfilePicture;