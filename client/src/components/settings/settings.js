import React from "react";
import TopNavBar from "../topNavBar/index";
import './settings.css';




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
                                <div className="settings-li sli1 x">Profile Picture</div>
                                <div className="settings-li sli1 x">Interests</div>
                                <div className="settings-li sli1 x">Distance</div>
                                <div className="settings-li sli1 x">Email</div>
                                <div className="settings-li sli2 x">Username and Password</div>
                                

                            </div>
                        </div>

                        <div></div>

                        <div className="settings-content">
                            

                        </div>


                    </div>
                </div>
            </div>


        )
    }
};


export default Settings;