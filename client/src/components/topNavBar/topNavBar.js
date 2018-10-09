import React from "react";
import "./topNavBar.css";
import { Navbar, NavItem } from 'react-materialize';
import { Link } from "react-router-dom";
import SettingsIcon from "../icons/settingsIcon/index";
import LogoutIcon from "../icons/logoutIcon/index";
import MessageIconTopNav from "../icons/messageIconTopNav/index";
//passport api to logout
import passport from "../../utils/PassportAPI"


class TopNavBar extends React.Component {

    logout = () => {
        passport.logOut()
            .then(() => {
                this.props.history.push("/");
            });
            this.props.resetData();
    }

    render() {
        return (
            <Navbar brand={[<Link to="/main" className="righteous">
                StudyDuos
            </Link>]} right>
                <NavItem> <MessageIconTopNav /> </NavItem>
                <NavItem> <SettingsIcon /> </NavItem>
                <NavItem onClick={this.logout}> <LogoutIcon /> </NavItem>
            </Navbar>
        )
    }
};

export default TopNavBar;