import React from "react";
import "./interests.css";
import head from '../../assets/head.jpg'
import { Animated } from "react-animated-css";

class Interests extends React.Component {
  constructor(props) {
    super(props);

    this.changeInterests = this.changeInterests.bind(this);

    this.state = {
      textInput: '',
      newClass: "settings-interests-wrapper-1",
      interests: [],
      shownInterests: []
    };


  }

  changeInterests = (index) => {
    this.setState({
      interests: this.state.interests.splice(index, 1)
    })
  }

  delete = (thang) => {
    let index = -1;

    this.state.interests.forEach(i => {

      index++;

      if (i === thang) {
        this.changeInterests(index);

      }
    });
  }


  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  push = (e) => {
    e.preventDefault();

    this.state.interests.push(this.state.textInput);

    this.setState({
      shownInterests: this.state.interests
    });


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

        <div></div>
        <div></div>

        <Animated animationIn="fadeIn">
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