import React from "react";
import "./profilePicture.css";
import head from '../../assets/head.jpg'
import { Animated } from "react-animated-css";
// api
import API from "../../utils/API";

class ProfilePicture extends React.Component {
  state = {
    imageLink: this.props.appState.user.image,
    newClass: "profile-picture-wrapper-1",
    imageInput: ''
  };

  updateUserImageLink = () => {
    let temp = this.props.appState.user;
    temp.image = this.state.imageInput;
    this.props.setData(temp, 'user');
    API.updateUser({ image: this.state.imageInput }, this.props.appState.user.id)
    window.Materialize.toast('Your user photo has been updated!', 3000);
  }

  changeBackgroundInput = (e) => {
    e.preventDefault();

    if (this.state.newClass === "profile-picture-wrapper-1") {
      this.setState({
        newClass: "profile-picture-wrapper-2"
      });

    }
  }

  changeBackground = () => {
    if (this.state.newClass === "profile-picture-wrapper-2") {
      this.setState({
        newClass: "profile-picture-wrapper-1"
      });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();
    this.setState({
      imageLink: this.state.imageInput,
      imageInput: ''
    })
    this.changeBackground();
    this.updateUserImageLink();
  }

  render() {
    return (

      <div onClick={this.changeBackground} className={this.state.newClass}>

        <div></div>
        <Animated animationIn="fadeIn">
          <div className="settings-profile-picture-wrapper">
            <div className="settings-profile-picture">
              <img src={this.state.imageLink || head} alt="img" width="250px" height="250px" />
            </div>

            <h4 className="display-text-settings-profile-picture">Enter A link To Your New Profile Picture Here</h4>
            <p className="display-text-settings-profile-picture">
              We recommend that your profile picture is 250px x 250px to ensure proper sizing</p>


          </div>
        </Animated>


        <div></div>
        <div></div>

        <Animated animationIn="fadeIn">
          <div className="settings-profile-link">
            <form className="settings-link-form-wrapper">
              <div className="bubble">
                <div id="profile-messaging-form">
                  <div className="input-field">
                    <input onClick={this.changeBackgroundInput}
                      type="text"
                      className="materialize-textarea"
                      name="imageInput"
                      placeholder="Enter A New Image Link"
                      value={this.state.imageInput}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
              <button className="circleButton" onClick={this.handleFormSubmission}>Submit</button>
            </form>
          </div>
        </Animated>

        <div></div>

      </div>


    );
  }
}



export default ProfilePicture;