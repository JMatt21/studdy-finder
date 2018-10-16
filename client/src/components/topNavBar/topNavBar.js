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

    render(props) {
        return (
            <nav>
                <Link to="/main"><h4 className="righteous title">StudyDuo</h4></Link>
                <ul>
                    {/* Still need to do Message Drop Down Menu for "MessageIcon Below" */}
                    <li>
                        <SideNav
                            trigger={<a><MessageIconTopNav /></a>}
                            options={{ closeOnClick: true, edge: "right", draggable: true }}
                        >
                        {/* <MessageBoard test={this.props.test}/> */}
                            {/* <SideNavItem userView
                                user={{
                                    background: 'img/office.jpg',
                                    image: 'img/yuna.jpg',
                                    name: 'John Doe',
                                    email: 'jdandturk@gmail.com'
                                }}
                            />
                            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                            <SideNavItem href='#!second'>Second Link</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>Subheader</SideNavItem>
                            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
                        </SideNav>

                    </li>
                    <li><Link to="/settings"><SettingsIcon /></Link></li>
                    <li><a onClick={this.logout}><LogoutIcon /></a></li>
                </ul>
            </nav>
        )
    }
};

export default TopNavBar;