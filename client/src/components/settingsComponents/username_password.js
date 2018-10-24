import React from "react";
import "./username_password.css";
import { Animated } from "react-animated-css";
// api
import API from "../../utils/API";

class Username_password extends React.Component {
  state = {
    newClass: "username-color-1",
    color: "",
    currentUsername: this.props.appState.user.name || "undefined",
    newUsername: '',
    newUserNameConfirm: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
  };

  colorSorter = () => {
    let colorArr = [1, 2, 3, 4, 5, 6];
    let colorNum = colorArr[Math.floor(Math.random() * colorArr.length)].toString();
    return colorNum
  }

  changeBackgroundInput = (e) => {
    if (e) {
      e.preventDefault();
    }

    let funcColor = this.colorSorter();

    if (funcColor === this.state.color) {
      funcColor = this.colorSorter();
      this.setState({
        newClass: "username-color-" + funcColor
      });

    } else {

      console.log("Not the same shit");
      this.setState({
        newClass: "username-color-" + this.state.color,
        color: funcColor
      });
    }

  }

  changeBackground = (e) => {
    if (e) {
      e.preventDefault();
    }


    this.setState({
      newClass: "username-color-1"
    });

  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  submitNewUserName = () => {
    this.changeBackground();
    if ((this.state.newUsername !== '' && this.state.newUserNameConfirm !== '') && this.state.newUsername === this.state.newUserNameConfirm) {
      let temp = this.props.appState.user;
      temp.name = this.state.newUserNameConfirm;
      this.props.setData(temp, 'user');
      this.setState({
        currentUsername: this.props.appState.user.name,
        newUsername: '',
        newUserNameConfirm: ''
      });

      API.updateUser({ name: this.state.newUserNameConfirm }, this.props.appState.user.id);
      window.Materialize.toast('Your new username has been updated!', 3000);
    }
  }

  submitNewPassword = event => {
    this.changeBackground();
    event.preventDefault();
    this.setState({
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    });
    const { oldPassword, newPassword, newPasswordConfirm } = this.state;
    if (newPassword === newPasswordConfirm)
      window.Materialize.toast('Your new password has been updated!', 3000);
    API.validateAndUpdatePassword(this.props.appState.user.id, oldPassword, newPasswordConfirm)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  render() {

    const wrapperClass = `${this.state.newClass} settings-username-password-wrapper`;

    return (

      <div className={wrapperClass}>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>


        <Animated animationIn="fadeIn">
          <div className="username-form-wrapper">
            <div></div>
            <div>
              <h3 className="settings-username-text">Update Your Username</h3>
              <p className="settings-username-text">Current Username:
            <p className="settings-username-text-2">{this.state.currentUsername}</p>
              </p>
            </div>

            <div></div>
            <div></div>

            <div>
              <form className="username-input-wrapper">
                <div className="username-bubble">
                  <div id="messaging-form">
                    <div className="input-field">
                      <input
                        type="text"
                        className="materialize-textarea"
                        name="newUsername"
                        placeholder="Enter Your New Username"
                        onClick={this.changeBackgroundInput}
                        onChange={this.handleInputChange}
                        value={this.state.newUsername}
                      />
                    </div>
                  </div>
                </div>

                <div className="username-bubble">
                  <div id="messaging-form">
                    <div className="input-field">
                      <input
                        type="text"
                        className="materialize-textarea"
                        name="newUserNameConfirm"
                        placeholder="Confirm Your New Username"
                        onClick={this.changeBackgroundInput}
                        onChange={this.handleInputChange}
                        value={this.state.newUserNameConfirm}
                      />
                    </div>
                  </div>
                </div>

              </form>
            </div>

            <div></div>
            <div></div>
            <div>
              <div className="settings-email-squareButton">
                <div></div>

                <button onClick={this.submitNewUserName} className="squareButton">Submit</button>

              </div>
            </div>
          </div>
        </Animated>

        <Animated animationIn="fadeIn">
          <div className="password-form-wrapper">
            <div></div>
            <div>
              <h3 className="settings-username-text">Update Your Password</h3>
            </div>

            <div></div>
            <div></div>
            <form className="password-input-wrapper">

              <div className="username-bubble">
                <div id="messaging-form">
                  <div className="input-field">
                    <input
                      type="text"
                      className="materialize-textarea"
                      name="oldPassword"
                      value={this.state.oldPassword}
                      onChange={this.handleInputChange}
                      placeholder="Enter Your Old Password"
                      onClick={this.changeBackgroundInput}
                    />
                  </div>
                </div>
              </div>

              <div className="username-bubble">
                <div id="messaging-form">
                  <div className="input-field">
                    <input
                      type="text"
                      className="materialize-textarea"
                      name="newPassword"
                      value={this.state.newPassword}
                      onChange={this.handleInputChange}
                      placeholder="Enter Your New Password"
                      onClick={this.changeBackgroundInput}
                    />
                  </div>
                </div>
              </div>

              <div className="username-bubble">
                <div id="messaging-form">
                  <div className="input-field">
                    <input
                      type="text"
                      className="materialize-textarea"
                      name="newPasswordConfirm"
                      value={this.state.newPasswordConfirm}
                      onChange={this.handleInputChange}
                      placeholder="Confirm Your New Password"
                      onClick={this.changeBackgroundInput}
                    />
                  </div>
                </div>
              </div>

            </form>

            <div></div>
            <div></div>
            <div className="settings-email-squareButton">
              <div></div>
              <button onClick={this.submitNewPassword} className="squareButton">Submit</button>
            </div>
          </div>
        </Animated>



      </div >



    );
  }
}



export default Username_password;
