import React from "react";
import "./topNavBar.css";
import { SideNav } from 'react-materialize';
import { Link } from "react-router-dom";
import SettingsIcon from "../icons/settingsIcon/index";
import LogoutIcon from "../icons/logoutIcon/index";
import MessageIconTopNav from "../icons/messageIconTopNav/index";
import MessageBoard from "../messageBoard/index";
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
            <nav>
                <Link to="/main"><h4 className="righteous title">Study-Duo</h4></Link>
                <ul>
                    <li>
                        <SideNav
                            trigger={<a><MessageIconTopNav /></a>}
                            options={{ closeOnClick: true, edge: "right", draggable: false }}
                        >
                            <MessageBoard user={this.props.user} data={this.props.data} />
                        </SideNav>

                    </li>
                    <li><Link to="/settings/profile_picture"><SettingsIcon /></Link></li>
                    <li><a onClick={this.logout}><LogoutIcon /></a></li>
                </ul>
            </nav>
        )
    }
};

export default TopNavBar;