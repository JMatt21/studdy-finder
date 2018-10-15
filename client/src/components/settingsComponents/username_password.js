import React from "react";
import "./username_password.css";
import { Animated } from "react-animated-css";

class Username_password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: "username-color-1",
      color: "",
      currentUsername: "BobRossLover62"
    };

  }

  colorSorter = () => {
    let colorArr = [1, 2, 3, 4, 5, 6];
    let colorNum = colorArr[Math.floor(Math.random() * colorArr.length)].toString();
    return colorNum
  }



  changeBackgroundInput = (e) => {
    e.preventDefault();

    let funcColor = this.colorSorter();

    if (funcColor === this.state.color) {
      funcColor = this.colorSorter();
      this.setState({
        newClass: "username-color-" + funcColor
      });

    } else {

      console.log("Not the same shit");
      this.state.color = funcColor;
      this.setState({
        newClass: "username-color-" + this.state.color
      });
    }

  }

  changeBackground = (e) => {
    e.preventDefault();

    this.setState({
      newClass: "username-color-1"
    });

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
          <div>
            <h3 className="settings-username-text">Update Your Username</h3>
            <p className="settings-username-text">Current Username:
          <p className="settings-username-text-2">{this.state.currentUsername}</p>
            </p>
          </div>
        </Animated>

        <Animated animationIn="fadeIn">
          <div>
            <h3 className="settings-username-text">Update Your Password</h3>
          </div>
        </Animated>

        <div></div>
        <div></div>


        <Animated animationIn="fadeIn">
          <form className="username-form-wrapper">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="username-bubble">
              <div id="messaging-form">
                <div className="input-field">
                  <input
                    type="text"
                    className="materialize-textarea"
                    name="textInput"
                    placeholder="Enter Your New Username"
                    onClick={this.changeBackgroundInput}
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
                    onClick={this.changeBackgroundInput}
                  />
                </div>
              </div>
            </div>

          </form>
        </Animated>


        <Animated animationIn="fadeIn">
          <form className="password-form-wrapper">
            <div></div>
            <div className="username-bubble">
              <div id="messaging-form">
                <div className="input-field">
                  <input
                    type="text"
                    className="materialize-textarea"
                    name="textInput"
                    placeholder="Enter Your Old Password"
                    onClick={this.changeBackgroundInput}
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
                    placeholder="Enter Your New Password"
                    onClick={this.changeBackgroundInput}
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
                    placeholder="Confirm Your New Password"
                    onClick={this.changeBackgroundInput}
                  />
                </div>
              </div>
            </div>

          </form>
        </Animated>



        <div></div>
        <div></div>

        <div>
          <div className="settings-email-squareButton">
            <div></div>
            <Animated animationIn="fadeIn">
              <button onClick={this.changeBackground} className="squareButton">Submit</button>
            </Animated>
          </div>
        </div>


        <div>
          <div className="settings-email-squareButton">
            <div></div>
            <Animated animationIn="fadeIn">
              <button onClick={this.changeBackground} className="squareButton">Submit</button>
            </Animated>
          </div>
        </div>


        <div></div>



      </div >


    );
  }
}



export default Username_password;