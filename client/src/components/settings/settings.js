import React from "react";
import TopNavBar from "../topNavBar/index";
import { Link, Route } from "react-router-dom";
import './settings.css';
import {picture, interests, distance, email, username_password, welcome} from '../settingsComponents/index';




class Settings extends React.Component {

    render() {
        return (
            <div>
                <TopNavBar {...this.props} />
                <div className="grid-wrapper">

                    <div className="settings-main-grid">

                        <div></div>
                        <div></div>
                        <div></div>

                        <div className="settings-side-panel">
                            <div className="settings-list-grid">
                                <div></div>
                                <Link className="settings-li sli1 x link" to='/Settings/profile_picture'>Profile Picture</Link>
                                <Link className="settings-li sli1 x link" to='/Settings/interests'>Interests</Link>
                                <Link className="settings-li sli1 x link" to='/Settings/distance'>Distance</Link>
                                <Link className="settings-li sli1 x link" to='/Settings/email'>Email</Link>
                                <Link className="settings-li sli2 x link" to='/Settings/username_password'>Username and Password</Link>


                            </div>
                        </div>

                        <div></div>

                        <div className="settings-content">
                        <Route exact path={'/Settings/welcome'} component={welcome}/>
                        <Route exact path={'/Settings/profile_picture'} component={picture} />
                        <Route exact path={'/Settings/interests'} component={interests} />
                        <Route exact path={'/Settings/distance'} component={distance} />
                        <Route exact path={'/Settings/email'} component={email} />
                        <Route exact path={'/Settings/username_password'} component={username_password} />

                        </div>


                    </div>
                </div>
            </div>


        )
    }
};


export default Settings;