import { useHistory } from 'react-router-dom';
import { ReactComponent as SettingsIcon } from './assets/settings-icon.svg';
import './SettingsButton.scss';

const SettingsButton = () => {
    let history = useHistory();

    const RedirectToSettings = () => {
        history.push('settings');
    }

    return (
        <button className="settings-btn" onClick={RedirectToSettings}>
            <SettingsIcon />
        </button>
    );
}

export default SettingsButton;