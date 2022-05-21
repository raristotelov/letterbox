import { connect } from 'react-redux';
import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as MoreIcon } from '../assets/more-vertical.svg';
import { markNewsReadLater } from '../../../../services/userService';
import { setHideNewsIdArray } from '../../../../actions/newsletterActions';
import { markRead } from '../../../../actions/userActions';

import './NewsOptionsDropDown.scss';

const NewsOptionsDropDown = ({ id, user, markRead, setHideNewsIdArray }) => {

    const onMarkAsRead = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markRead([id], idToken);
                })
                .catch(err => console.log(err));
        }
    }

    const onHideNews = () => {
        setHideNewsIdArray([id]);
    }

    return (
        <div className="news-options-dropdown">
            <span className="news-options-icon"><MoreIcon /></span>
            <ul className="news-options-dropdown-content">
                <li onClick={onHideNews} id="hide"><span><Hide /></span> Hide</li>
                <li onClick={onMarkAsRead} id="markAsRead"><span><Openbook /></span> Mark as read</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    markRead,
    setHideNewsIdArray,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsOptionsDropDown);