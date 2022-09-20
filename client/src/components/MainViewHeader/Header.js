import { connect } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { signOut } from '../../actions/userActions';

import { ReactComponent as Search } from './Assets/search.svg';
import { ReactComponent as Copy } from './Assets/copy.svg';
import Input from '../shared/Input';
import SettingsDropDown from './SettingsDropDown';

import copyToClipboard from './Helpers/CopyToClipboard';
import { SearchContext } from '../../contexts/SearchContext';
import './Header.scss';

const Header = ({ emailMask, signOut, user }) => {
    const { setSearch } = useContext(SearchContext);
    const [settingsState, setState] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (settingsState) {
            document.addEventListener('click', closeSettings);
        }
    }, [settingsState]);

    const closeSettings = () => {
        document.removeEventListener('click', closeSettings);
        setState(false);
    };

    const handleSignOut = async () => {
        closeSettings();
        await signOut();

        history.push('/sign-in');
    };

    const firstName = user.displayName.split(' ')[0];
    const lastName = user.displayName.split(' ')[1];

    const userInitials = `${firstName?.substring(0, 1).toUpperCase()}${lastName?.substring(0, 1).toUpperCase()}`;

    let formattedEmailMask = '';

    if (emailMask.length > 24) {
        formattedEmailMask = emailMask.substring(0, 24) + '...';
    } else {
        formattedEmailMask = emailMask;
    }

    return (
        <div className="header">
            <div className="elements-wrapper">
                <div className="search-wrapper">
                    <Input onChange={(e) => setSearch(e.target.value)} id="search" type="text" placeholder="Search by feed, newsletter or news title" endText={<Search />} />
                </div>

                <div className="profile-info">
                    <div className="email-wrapper">
                        <label id="header-email" className="email-label" title={emailMask}>
                            {formattedEmailMask}
                        </label>

                        <button className="copy-btn" onClick={() => copyToClipboard(emailMask)}>
                            <Copy />
                        </button>
                    </div>

                    <div onClick={() => setState(true)} className="avatar-wrapper">
                        <div className="circle">{userInitials}</div>
                    </div>
                </div>

                {settingsState ? (
                    <div className="settings-container">
                        <SettingsDropDown
                            emailMask={emailMask}
                            handleSignOut={handleSignOut}
                            userInitials={userInitials}
                            userDisplayName={user.displayName}
                        />
                    </div>
                ) : (
                        ''
                    )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    emailMask: state.user.emailMask,
});

const mapDispatchToProps = {
    signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
