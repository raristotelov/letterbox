import { ReactComponent as Settings } from './Assets/settings.svg';
import { ReactComponent as Ogranize } from './Assets/organize-sources.svg';
import { ReactComponent as Upgrade } from './Assets/upgrade.svg';
import { ReactComponent as LogOut } from './Assets/log-out.svg';

import './SettingsDropDown.scss';

const SettingsDropDown = ({ emailMask, handleSignOut }) => {
    return (
        <div className="settings-menu-container">
            <div className="user-info">
                <div className="avatar-wrapper">
                    <div className="circle">LB</div>
                </div>

                <div className="logo-emailmask-container">
                    <span className="logo">Newsletter-App</span>
                    <span className="emailmask">
                        {emailMask.split('@')[0]}@<span className="underline">newsletterapp.io</span>
                    </span>
                </div>
            </div>

            <ul className="settings-menu-content">
                <li>
                    <Settings />

                    <span> Settings</span>
                </li>
                <li>
                    <Ogranize />

                    <span>Organize Sources</span>
                </li>
                <li>
                    <Upgrade />

                    <span> Upgrade Pro plan</span>
                </li>
                <li onClick={() => handleSignOut()}>
                    <LogOut />

                    <span>Log out</span>
                </li>
            </ul>
        </div>
    );
};

export default SettingsDropDown;
