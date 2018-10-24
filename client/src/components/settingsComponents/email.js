import React from "react";
import "./email.css";
import { Animated } from "react-animated-css";
// api
import API from "../../utils/API";

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newClass: "settings-email-wrapper",
      currentEmail: this.props.appState.user.email || undefined,
      newEmail: '',
      newEmailConfirm: ''
    };
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmission = event => {
    event.preventDefault();
    const { newEmail, newEmailConfirm } = this.state;
    if ((newEmail !== '' && newEmailConfirm !== '') && (newEmail === newEmailConfirm)) {
      this.changeBackground();
      this.updateUserEmail(newEmail);
    } else {
      window.Materialize.toast("Please enter matching emails.", 3000);
    }
    this.setState({ newEmail: '', newEmailConfirm: '' });
  }
  updateUserEmail = (newEmail) => {
    API.updateUser({ email: newEmail }, this.props.appState.user.id)
      .then(({ data }) => {
        console.log(data);
        if (data) {
          let temp = this.props.appState.user;
          temp.email = newEmail;
          this.props.setData(temp, 'user');
          this.setState({currentEmail: newEmail});
          window.Materialize.toast('Email has been updated!', 3000);
        }
        else {
          window.Materialize.toast('Server error. Please try again later', 3000);
        }
      }).catch(err => console.log(err));
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
    // e.preventDefault();

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

        <form>
          <div className="settings-email-form-wrapper">
            <div></div>

            <div>
              <Animated animationIn="fadeIn">
                <div className="email-form-wrapper">
                  <div className="email-bubble">
                    <div id="messaging-form">
                      <div className="input-field">
                        <input
                          type="email"
                          className="materialize-textarea"
                          name="newEmail"
                          value={this.state.newEmail}
                          onChange={this.handleInputChange}
                          placeholder="Enter Your New Email"
                          onClick={this.changeBackgroundInput3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
            </div>

            <div></div>
            <div></div>

            <div>
              <Animated animationIn="fadeIn">
                <div className="email-form-wrapper">
                  <div className="email-bubble">
                    <div id="messaging-form">
                      <div className="input-field">
                        <input
                          type="text"
                          className="materialize-textarea"
                          name="newEmailConfirm"
                          value={this.state.newEmailConfirm}
                          onChange={this.handleInputChange}
                          placeholder="Confirm Your New Email"
                          onClick={this.changeBackgroundInput4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
            </div>

            <div></div>

          </div>

          <div></div>
          <div></div>

          <div className="settings-email-squareButton">
            <div></div>
            <Animated animationIn="fadeIn">
              <button onClick={this.handleFormSubmission} className="squareButton">Submit</button>
            </Animated>
          </div>
        </form>



      </div>



    );
  }
}



export default Email;