import { useHistory } from 'react-router-dom';

import { ReactComponent as ReadLaterIcon } from './assets/read-later-icon.svg';

import './ReadLaterLink.scss';

const ReadLaterLink = ({ selected }) => {
    let history = useHistory();

    const RedirectToReadLater = () => {
        history.push('/read-later');
    }

    return (
        <button className='read-later-link' onClick={RedirectToReadLater}>
            <span className={`read-later-title ${selected ? 'selected' : ''}`}>Read Later</span>
            
            <div className='read-later-icon'>
                <span className='read-later-count'>2</span>

                <ReadLaterIcon />
            </div>
        </button>
    );
}

export default ReadLaterLink;