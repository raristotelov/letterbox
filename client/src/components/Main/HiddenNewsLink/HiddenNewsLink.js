import { useHistory } from 'react-router-dom';

import { ReactComponent as Hide } from './assets/hide.svg';

import './HiddenNewsLink.scss';

const HiddenNewsLink = ({ selected }) => {
    let history = useHistory();

    const RedirectToReadLater = () => {
        history.push('/hidden-news');
    }

    return (
        <button className='hidden-news-link' onClick={RedirectToReadLater}>
            <span className={`hidden-news-title ${selected ? 'selected' : ''}`}>Hidden news</span>
            
            <div className='hidden-news-icon'>
                <span className='hidden-news-count'>2</span>

                <Hide />
            </div>
        </button>
    );
}

export default HiddenNewsLink;