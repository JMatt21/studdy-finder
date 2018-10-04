import React from "react";
import "./topNavBar.css";
import { Navbar, NavItem } from 'react-materialize';
import SettingsIcon from "../settingsIcon/index";
//passport api to logout
import passport from "../../utils/PassportAPI"
import { Redirect } from 'react-router-dom'

class TopNavBar extends React.Component {
    state = {
        email: ''
    }
    logout = () => {
        passport.logOut()
            .then( () => {
                this.props.history.push("/");
            });
    }

    componentDidMount() {
        passport.getUserInfo()
            .then(({ data }) => {
                this.setState({ email: data.email })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Navbar brand={[<h4 className="righteous">
                StudyDuos
                {this.state.email}
            {/* DuoStudy */}
                {/* StudySearch */}
                {/* StudyBacon */}
            </h4>]} right>
                <NavItem href="/login"><img className="navMessageIcon" src={require("./chaticon.png")} /></NavItem>
                <NavItem href="/settings"><SettingsIcon /></NavItem>
                <NavItem onClick={this.logout}><img className="logoutIcon" src={require("./exit.png")} /></NavItem>
                {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem> */}
            </Navbar>
        )
    }
};

export default TopNavBar;