import { useHistory } from 'react-router-dom';
import { ReactComponent as ReadHistoryIcon } from './assets/read-history-icon.svg';
import './ReadHistoryLink.scss';

const ReadHistoryLink = () => {
    let history = useHistory();

    const RedirectToReadHistory = () => {
        history.push('read-history');
    }

    return (
        <button className="read-later-link" onClick={RedirectToReadHistory}>
            <span className="read-later-title">Read History</span>
            
            <div className="read-later-icon">
                <ReadHistoryIcon />
            </div>
        </button>
    );
}

export default ReadHistoryLink;