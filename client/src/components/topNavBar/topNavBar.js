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
                <Link to="/main"><h4 className="righteous title">StudyDuo</h4></Link>
                <ul>
                    {/* Still need to do Message Drop Down Menu for "MessageIcon Below" */}
                <li><a href="/messagedropdown"><MessageIconTopNav/></a></li>
                <li><Link to="/settings"><SettingsIcon/></Link></li>
                <li><Link to="/" onClick={this.logout}><LogoutIcon/></Link></li>
                </ul>
            </nav>
        )
    }
};

export default TopNavBar;