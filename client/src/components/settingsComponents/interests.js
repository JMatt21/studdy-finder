import React from "react";
import "./interests.css";
import { Animated } from "react-animated-css";
// api
import API from "../../utils/API";

class Interests extends React.Component {

  state = {
    textInput: '',
    newClass: "settings-interests-wrapper-1",
    shownInterests: []
  };

  componentDidMount() {
    this.setState({
      shownInterests: this.props.appState.user.beginnerSkills || [], 
    })
  }

  updateUserSkills = () => {
    let temp = this.props.appState.user;
    temp.beginnerSkills = this.state.shownInterests;
    this.props.setData(temp, 'user');
    API.updateUser({beginnerSkills: this.state.shownInterests}, this.props.appState.user.id)
  }

  delete = (thang) => {
    let index = this.state.shownInterests.indexOf(thang);
    let arr = this.state.shownInterests;

    arr.splice(index, 1);

    this.setState({
      shownInterests: arr
    })
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  push = (e) => {
    e.preventDefault();
    if (this.state.textInput === "") {
      window.Materialize.toast('Please Enter A Value', 2000);
    } else {
      this.state.shownInterests.push(this.state.textInput);

      this.setState({
        shownInterests: this.state.shownInterests
      });

      this.updateUserSkills();

    }


    if (this.state.newClass === "settings-interests-wrapper-2") {
      this.setState({
        newClass: "settings-interests-wrapper-1"
      });
    }

  }


  changeBackgroundInput = (e) => {
    e.preventDefault();

    if (this.state.newClass === "settings-interests-wrapper-1") {
      this.setState({
        newClass: "settings-interests-wrapper-2"
      });

    }
}

  changeBackground = (e) => {
    e.preventDefault();
    if (this.state.newClass === "settings-interests-wrapper-2") {
      this.setState({
        newClass: "settings-interests-wrapper-1"
      });
    }
  }



  render() {
    return (
      <div onClick={this.changeBackground} className={this.state.newClass}>
        <div></div>
        <Animated animationIn="fadeIn">
          <div className="settings-form-wrapper">
            <div></div>

            <form className="interests-form-wrapper">
              <div className="interests-bubble">
                <div id="messaging-form">
                  <div className="input-field">
                    <input
                      onClick={this.changeBackgroundInput}
                      type="text"
                      className="materialize-textarea"
                      name="textInput"
                      placeholder="Your Interests..."
                      value={this.state.textInput}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <button className="circleButton x" onClick={this.push}>Submit</button>
            </form>

            <div></div>

          </div>
        </Animated>

        <div></div>
        <div></div>
        <Animated animationIn="zoomInUp">
          <div className="interests-buttons-wrapper">
            {this.state.shownInterests.map((items, i) => {
              return (
                <div key={i} className="interests-buttons">
                  <div className="interests-button-style x" id="style-x" onClick={() => this.delete(items)}>x</div>
                  <div className="interests-button-style x">{items}</div>
                </div>
              );
            })}

          </div>


        </Animated>

        <div></div>


      </div>


    );
  }
}



export default Interests;