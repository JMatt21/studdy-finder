import React from "react";
import "./welcome.css";
import { Animated } from "react-animated-css";

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })

    }



    render() {
        return (

            <div className="settings-welcome-wrapper">
                <div></div>

                <div className="settings-welcome-welcome-wrapper">
                    <div></div>
                    <div className="settings-welcome-text">Welcome</div>
                    <div></div>
                </div>

                <div></div>

            </div>

        );
    }

}




    export default Welcome;