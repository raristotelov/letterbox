import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Unhide } from './assets/unhide.svg';

import './HiddenNewsLink.scss';

const HiddenNewsLink = ({ hiddenNews, selected }) => {
    let history = useHistory();

    const RedirectToReadLater = () => {
        history.push('/hidden-news');
    }

    return (
        <button className='hidden-news-link' onClick={RedirectToReadLater}>
            <span className={`hidden-news-title ${selected ? 'selected' : ''}`}>Hidden news</span>
            
            <div className='hidden-news-icon'>
                {hiddenNews?.length 
                    ? (
                        <span className='hidden-news-count'>{hiddenNews?.length}</span>
                    ): null
                }

                <Unhide />
            </div>
        </button>
    );
}

const mapStateToProps = state => ({
    hiddenNews: state.user.hiddenNews
})

export default connect(mapStateToProps, null)(HiddenNewsLink);