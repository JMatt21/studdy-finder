import React from "react";
import "./topNavBar.css";
import { Navbar, li } from 'react-materialize';
import { Link } from "react-router-dom";
import SettingsIcon from "../icons/settingsIcon/index";
import LogoutIcon from "../icons/logoutIcon/index";
import MessageIconTopNav from "../icons/messageIconTopNav/index";
//passport api to logout
import passport from "../../utils/PassportAPI"

let userName = "Chance";

class TopNavBar extends React.Component {

    logout = () => {
        passport.logOut()
            .then(() => {
                this.props.history.push("/");
            });
    }

    render() {
        return (

            <nav>
                <h4><a href="/" className="righteous title">StudyDuos</a></h4>
                <ul>
                <li><a href="/messagedropdown"><MessageIconTopNav/></a></li>
                <li><a href="/settings"><SettingsIcon/></a></li>
                <li><a onClick={this.logout}><LogoutIcon/></a></li>
                </ul>
            </nav>
        )
    }
};

export default TopNavBar;