import React from "react";
import "./welcome.css";
import { Animated } from "react-animated-css";

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            information: ["Let's get started with creating your user profile!",
                "A picture is worth a thousand words, or a simple click. Here you can upload your user profile picture for everyone to see. Don't be shy, slap a photo on your profile to let people know who you are!",
                "Here you can enter whatever subject[s] you are studying. Once entered, other users with the best matching subjects will be displayed on the home page. This also helps other users find you when they are searching for individual subjects.",
                'This is where you can limit your search distance. People will only appear in the radius that you choose. If you are feeling extra free and distance is less of a concern, you can simply search "Anywhere"',
                "Simply change your email here. Even if we knew how, we still wouldn't send you junk mail. Unless Google paid us millions of dollars a year for user info, then we might consider it.",
                "Change your username and password here. Easy."],
            settingsOptions: ["", "Profile Picture", "Interests", "Distance", "Email", "Username and Password"],
            arrowClass: "arrow-class",
            index: 0

        };

    }

    next = () => {
        let anotherOne = this.state.index;
        anotherOne++;

        console.log(this.state.index);
        if (this.state.index > 4) {
            // anotherOne = 1;
            // this.setState({
            //     index: 1
            // });
            this.props.history.push("/settings/profile_picture")
        }
        this.setState({
            index: anotherOne
        });
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

                <Animated animationIn="fadeIn">
                    <div className="settings-welcome-pointers-wrapper">
                        <div></div>
                        <div></div>
                        <div className={this.state.index == 1 ? 'arrow-class' : ''}></div>

                        <div className="settings-nav-text">{this.state.index == 1 ? this.state.settingsOptions[this.state.index] : ''}</div>

                        <div className={this.state.index == 2 ? 'arrow-class' : ''}></div>

                        <div className="settings-nav-text">{this.state.index == 2 ? this.state.settingsOptions[this.state.index] : ''}</div>

                        <div className={this.state.index == 3 ? 'arrow-class' : ''}></div>

                        <div className="settings-nav-text">{this.state.index == 3 ? this.state.settingsOptions[this.state.index] : ''}</div>

                        <div className={this.state.index == 4 ? 'arrow-class' : ''}></div>

                        <div className="settings-nav-text">{this.state.index == 4 ? this.state.settingsOptions[this.state.index] : ''}</div>

                        <div className={this.state.index == 5 ? 'arrow-class' : ''}></div>

                        <div className="settings-nav-text">{this.state.index == 5 ? this.state.settingsOptions[this.state.index] : ''}</div>
                    </div>
                </Animated>

                <Animated animationIn="fadeIn">
                    <div className="settings-welcome-information-wrapper">
                        <div className="settings-welcome-text x">Welcome</div>
                        <p className="settings-welcome-information-text">
                            {this.state.information[this.state.index]}
                        </p>
                        <div>
                            <div className="why-wont-things-center">
                                <div></div>
                                <button className="squareButton" onClick={this.next}>Next</button>
                            </div>

                        </div>
                    </div>
                </Animated>

                <div>

                </div>

            </div>

        );
    }

}




export default Welcome;