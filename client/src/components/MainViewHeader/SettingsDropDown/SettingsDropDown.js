import { ReactComponent as LogOut } from './Assets/log-out.svg';

import './SettingsDropDown.scss';

const SettingsDropDown = ({ emailMask, handleSignOut, userInitials, userDisplayName }) => {
    return (
        <div className="settings-menu-container">
            <div className="user-info">
                <div className="avatar-wrapper">
                    <div className="circle">{userInitials}</div>
                </div>

                <div className="logo-emailmask-container">
                    <span className="logo">Letterbox</span>
                    
                    <span className="emailmask">
                        {userDisplayName}
                    </span>
                </div>
            </div>

            <ul className="settings-menu-content">
                <li onClick={handleSignOut}>
                    <LogOut />

                    <span>Log out</span>
                </li>
            </ul>
        </div>
    );
};

export default SettingsDropDown;
