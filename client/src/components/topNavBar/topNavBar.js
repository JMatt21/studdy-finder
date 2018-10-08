import React from "react";
import "./topNavBar.css";
import { Navbar, NavItem } from 'react-materialize';
import SettingsIcon from "../icons/settingsIcon/index";
import LogoutIcon from "../icons/logoutIcon/index";
import MessageIconTopNav from "../icons/messageIconTopNav/index";
//passport api to logout
import passport from "../../utils/PassportAPI"
// import { Redirect } from 'react-router-dom'

let userName = "Chance";

class TopNavBar extends React.Component {
    state = {
        email: `  Welcome, ${userName}!`
    }
    logout = () => {
        passport.logOut()
            .then( () => {
                this.props.history.push("/");
            });
    }

    render() {
        return (
            <Navbar brand={<h4 href="/" className="righteous">
                StudyDuos
            </h4>} right>
                {/* <NavItem>{this.state.email}</NavItem> */}
                <NavItem href="/messageDropdown"> <MessageIconTopNav/> </NavItem>
                <NavItem href="/settings"> <SettingsIcon/> </NavItem>
                <NavItem onClick={this.logout}> <LogoutIcon/> </NavItem>
            </Navbar>
        )
    }
};

export default TopNavBar;