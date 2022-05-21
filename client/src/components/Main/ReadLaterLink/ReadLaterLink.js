import { useHistory } from 'react-router-dom';
import { ReactComponent as ReadLaterIcon } from './assets/read-later-icon.svg';
import './ReadLaterLink.scss';

const ReadLaterLink = () => {
    let history = useHistory();

    const RedirectToReadLater = () => {
        history.push('/read-later');
    }

    return (
        <button className="read-later-link" onClick={RedirectToReadLater}>
            <span className="read-later-title">Read Later</span>
            
            <div className="read-later-icon">
                <ReadLaterIcon />
            </div>
        </button>
    );
}

export default ReadLaterLink;