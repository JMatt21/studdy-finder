import React from "react";
import "./distance.css";
import { Animated } from "react-animated-css";
// import { Toast } from 'react-materialize'

class Distance extends React.Component {
  constructor(props) {
    super(props);
    // const distance = (this.props.appState.distance > 30 ? 'Anywhere' : this.props.appState.distance);
    this.state = {
      sliderInput: this.props.appState.distance,
      bubbleSize: 'bubble-size-1',
      wrapperBackground: 'settings-distance-wrapper-1'

    };

  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    const distance = (value > 30 ? 999999 : value);
    this.props.setData(parseInt(distance), 'distance');

    this.setState({
      [name]: value
    })

    console.log(value);
    this.bubbleSizeHandler(value);
  }

  bubbleSizeHandler = (value) => {
    console.log(value);
    if (value < 9) {
      this.setState({
        bubbleSize: 'bubble-size-1'
      });
    } else if (value > 9 && value < 19) {
      this.setState({
        bubbleSize: 'bubble-size-2'
      });
    } else if (value > 19 && value < 21) {
      this.setState({
        bubbleSize: 'bubble-size-3'
      });
    } else if (value > 26 && value < 31) {
      this.setState({
        bubbleSize: 'bubble-size-4',
        wrapperBackground: 'settings-distance-wrapper-1'
      });
    } else if (value > 31 && value < 36) {
      this.setState({
        bubbleSize: 'bubble-size-5',
        wrapperBackground: 'settings-distance-wrapper-2'
      });
    }
  }



  render() {
    return (
      <div className={this.state.wrapperBackground}>
        <div></div>
        <Animated animationIn="fadeIn">
          <div>
            <h3 className="settings-distance-text">Choose Your Distance</h3>
            <p className="settings-distance-text">Search results will return people that are under the distance you choose</p>
          </div>
        </Animated>
        <div></div>
        <div></div>

        <Animated animationIn="fadeIn">
          <div className="settings-distance-slider-grid">
            <div></div>

            {(this.state.sliderInput > 30 ?
              <div className="settings-distance-range-value">Anywhere</div>
              : <div className="settings-distance-range-value">{this.state.sliderInput} Miles</div>
            )}

            <div></div>
            <div></div>

            <p class="range-field">
              <input
                type="range"
                min="5"
                max="35"
                step="5"
                name="sliderInput"
                value={this.state.sliderInput}
                onChange={this.handleInputChange} />

            </p>
          </div>
        </Animated>

        <div></div>
        <div></div>

        <div className="settings-distance-bubble-wrapper">
          <Animated animationIn="fadeIn">
            <div className="settings-distance-bubble x" id={this.state.bubbleSize}>You
            </div>
          </Animated>

        </div>


        <div></div>




      </div>
    );
  }
}



export default Distance;