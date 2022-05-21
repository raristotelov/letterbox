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

const Header = ({ emailMask, signOut }) => {
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

    const handleSignOut = () => {
        closeSettings();
        signOut();
        history.push('/signin');
    };

    return (
        <div className="header">
            <div className="elements-wrapper">
                <div className="search-wrapper">
                    <Input onChange={(e) => setSearch(e.target.value)} id="search" type="text" placeholder="Search by topic, website, or RSS link" endText={<Search />} />
                </div>

                <div className="profile-info">
                    <div className="email-wrapper">
                        <label id="header-email" className="email-label">
                            {emailMask}
                        </label>

                        <button className="copy-btn" onClick={() => copyToClipboard('header-email')}>
                            <Copy />
                        </button>
                    </div>

                    <div onClick={() => setState(true)} className="avatar-wrapper">
                        <div className="circle">LB</div>
                    </div>
                </div>

                {settingsState ? (
                    <div className="settings-container">
                        <SettingsDropDown emailMask={emailMask} handleSignOut={handleSignOut} />
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
