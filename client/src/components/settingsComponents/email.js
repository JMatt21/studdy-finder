import React from "react";
import "./email.css";
import { Animated } from "react-animated-css";

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: "settings-email-wrapper",
      currentEmail: "bobRoss@gmail.com"
    };

  }



  changeBackgroundInput3 = (e) => {
    e.preventDefault();

    this.setState({
      newClass: "settings-email-wrapper-3"
    });

  }

  changeBackgroundInput4 = (e) => {
    e.preventDefault();

    this.setState({
      newClass: "settings-email-wrapper-4"
    });

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

      <div className={this.state.newClass}>
        <div></div>

        <Animated animationIn="fadeIn">
          <div className="settings-email-text-wrapper">
            <div></div>
            <h3 className="settings-email-text">Update Your Email</h3>
            <div></div>
            <div></div>
            <p className="settings-email-text">Current Email: <p className="settings-email-text-2">{this.state.currentEmail}</p></p>
          </div>
        </Animated>

        <div></div>
        <div></div>

        <div className="settings-email-form-wrapper">
          <div></div>


          <div>
            <Animated animationIn="fadeIn">
              <form className="email-form-wrapper">
                <div className="email-bubble">
                  <div id="messaging-form">
                    <div className="input-field">
                      <input
                        type="text"
                        className="materialize-textarea"
                        name="textInput"
                        placeholder="Enter Your New Email"
                        onClick={this.changeBackgroundInput3}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Animated>
          </div>

          <div></div>
          <div></div>

          <div>
            <Animated animationIn="fadeIn">
              <form className="email-form-wrapper">
                <div className="email-bubble">
                  <div id="messaging-form">
                    <div className="input-field">
                      <input
                        type="text"
                        className="materialize-textarea"
                        name="textInput"
                        placeholder="Confirm Your New Email"
                        onClick={this.changeBackgroundInput4}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Animated>
          </div>

          <div></div>


        </div>

        <div></div>
        <div></div>

        <div className="settings-email-squareButton">
          <div></div>
          <Animated animationIn="fadeIn">
            <button onClick={this.changeBackground} className="squareButton">Submit</button>
          </Animated>
        </div>



      </div>


    );
  }
}



export default Email;