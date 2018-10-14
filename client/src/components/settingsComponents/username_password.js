import React from "react";
import "./username_password.css";
import { Animated } from "react-animated-css";

class Username_password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: "settings-email-wrapper",
      currentUsername: "BobRossLover62"
    };

  }



  changeBackground = (e) => {
    e.preventDefault();

    let bground = this.state.newClass;
    if (bground === "settings-email-wrapper-2" || bground === "settings-email-wrapper-3" || bground === "settings-email-wrapper-4") {
      this.setState({
        newClass: "settings-email-wrapper"
      });
    }
  }



  render() {

    return (

      <div className="settings-username-password-wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>

        <div>
          <h3>Update Your Username</h3>
          <p>Current Username: {this.state.currentUsername}</p>
        </div>

        <div>
          <h3>Update Your Password</h3>
        </div>

        <div>8</div>
        <div>9</div>

        <div>
          <form className="username-form-wrapper">
            <div></div>
            <div className="username-bubble">
              <div id="messaging-form">
                <div className="input-field">
                  <input
                    type="text"
                    className="materialize-textarea"
                    name="textInput"
                    placeholder="Enter Your New Username"
                    onClick={this.changeBackgroundInput3}
                  />
                </div>
              </div>
            </div>

            <div></div>
            <div></div>

            <div className="username-bubble">
              <div id="messaging-form">
                <div className="input-field">
                  <input
                    type="text"
                    className="materialize-textarea"
                    name="textInput"
                    placeholder="Confirm Your New Username"
                    onClick={this.changeBackgroundInput3}
                  />
                </div>
              </div>
            </div>

          </form>



        </div>


        <div>11</div>
        <div>12</div>
        <div>13</div>



      </div >


    );
  }
}



export default Username_password;