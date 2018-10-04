import React from "react";
import "./topNavBar.css";
import {Navbar, NavItem} from 'react-materialize';
import SettingsIcon from "../settingsIcon/index";



class TopNavBar extends React.Component {

    

    render() {
        return (
            <Navbar brand={[<h4 className="righteous">
            StudyDuos
            {/* DuoStudy */}
            {/* StudySearch */}
            {/* StudyBacon */}
            </h4>]} right>
            <NavItem href="/login"><img className="navMessageIcon" src={require("./chaticon.png")} alt="img"/></NavItem>
            <NavItem href="/settings"><SettingsIcon/></NavItem>
                <NavItem href="/login"><img className="logoutIcon" src={require("./exit.png")} alt="img"/></NavItem>
            </Navbar>
        )
    }
};

export default TopNavBar;