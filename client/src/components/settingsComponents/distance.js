import React from "react";
import "./distance.css";
import { Animated } from "react-animated-css";
// import { Toast } from 'react-materialize'

class Distance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderInput: 5,
      bubbleSize: 'bubble-size-1',
      wrapperBackground: 'settings-distance-wrapper-1'

    };


  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })

    this.bubbleSizeHandler();
  }

  bubbleSizeHandler = () => {
    if (this.state.sliderInput < 19) {
      console.log('1');
      this.setState({
        bubbleSize: 'bubble-size-1',
        wrapperBackground: 'settings-distance-wrapper-1'
      });
    } else if (this.state.sliderInput === 30) {
      this.setState({
        bubbleSize: 'bubble-size-3',
        wrapperBackground: 'settings-distance-wrapper-2'
      });
    } else {
      this.setState({
        bubbleSize: 'bubble-size-2',
        wrapperBackground: 'settings-distance-wrapper-1'
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

            {(this.state.sliderInput === '35' ?
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
            <div className="settings-distance-bubble" id={this.state.bubbleSize}>You
            </div>
         </Animated>
         
          </div>


          <div></div>




      </div>
        );
      }
    }
    
    
    
export default Distance;