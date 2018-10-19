import React from "react";
import TopNavBar from "../topNavBar/index";
import { Link, Route } from "react-router-dom";
import './settings.css';
import { Picture, Interests, Distance, Email, UsernamePassword, Location } from '../settingsComponents/index';
// apis
import API from "../../utils/API";

class Settings extends React.Component {

    componentDidMount() {
        this.getUserLocation();
    }

    getUserLocation() {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            let temp = this.props.appState.user;
            temp.latitude = latitude;
            temp.longitude = longitude;
            this.props.setData(temp, 'user');
            API.updateUser({ latitude: latitude, longitude: longitude }, this.props.appState.user.id)
        })
    }
    componentWillUnmount() {
        console.log("SETTINGS UNMOUNTING");
        // update app data with new user stuff
        const { id, beginnerSkills, latitude, longitude } = this.props.appState.user;
        API.getUserInfo(id)
            .then(({ data }) => {
                this.props.setData(data, 'user');
            })
        // API.searchForUsers(beginnerSkills, latitude, longitude, 10000000, id)
        //     .then(({ data }) => {
        //         this.props.setData(data, 'carousel');
        //         console.log(data);
        //     })
    }
    render() {
        return (
            <div>
                <TopNavBar {...this.props} user={this.props.appState.user} data={this.props.appState.user.Matches || []} />
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
                                <Link className="settings-li sli2 x link" to='/Settings/location'>Location</Link>


                            </div>
                        </div>

                        <div></div>

                        <div className="settings-content">
                            <Route exact path={`${this.props.match.url}/profile_picture`}
                                render={() => <Picture {...this.props} />} />
                            <Route exact path={`${this.props.match.url}/interests`}
                                render={() => <Interests {...this.props} />} />
                            <Route exact path={`${this.props.match.url}/distance`}
                                render={() => <Distance {...this.props} />} />
                            <Route exact path={`${this.props.match.url}/email`}
                                render={() => <Email {...this.props} />} />
                            <Route exact path={`${this.props.match.url}/username_password`}
                                render={() => <UsernamePassword {...this.props} />} />
                            <Route exact path={`${this.props.match.url}/location`}
                                render={() => <Location {...this.props} />} />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
};


export default Settings;