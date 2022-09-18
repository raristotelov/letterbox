import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as ReadLaterIcon } from './assets/read-later-icon.svg';

import './ReadLaterLink.scss';

const ReadLaterLink = ({ readLaterNews, selected }) => {
    let history = useHistory();

    const RedirectToReadLater = () => {
        history.push('/read-later');
    }

    return (
        <button className='read-later-link' onClick={RedirectToReadLater}>
            <span className={`read-later-title ${selected ? 'selected' : ''}`}>Read Later</span>
            
            <div className='read-later-icon'>
                {readLaterNews?.length 
                    ? (
                        <span className='read-later-count'>{readLaterNews?.length}</span>
                    ) : null
                }

                <ReadLaterIcon />
            </div>
        </button>
    );
}

const mapStateToProps = state => ({
    readLaterNews: state.user.readLaterNews
})

export default connect(mapStateToProps, null)(ReadLaterLink);
