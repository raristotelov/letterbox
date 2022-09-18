import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as ReadHistoryIcon } from './assets/read-history-icon.svg';

import './ReadHistoryLink.scss';

const ReadHistoryLink = ({ selected, user }) => {
    let history = useHistory();

    const RedirectToReadHistory = () => {
        history.push('/read-history');
    }

    return (
        <button className='read-history-link' onClick={RedirectToReadHistory}>
            <span className={`read-history-title ${selected ? 'selected' : ''}`}>Read History</span>
            
            <div className='read-history-icon'>
                <span className='read-history-count'>2</span>

                <ReadHistoryIcon />
            </div>
        </button>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, null)(ReadHistoryLink);