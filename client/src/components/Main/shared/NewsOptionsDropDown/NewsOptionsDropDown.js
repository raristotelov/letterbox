import { connect } from 'react-redux';

import {
    markNewsAsRead,
    hideNews,
    unhideNews
} from '../../../../actions/userActions';
import newsActionOptions from '../../../../helpers/newsActionOptions';

import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Unhide } from '../assets/unhide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as MoreIcon } from '../assets/more-vertical.svg';

import './NewsOptionsDropDown.scss';

const NewsOptionsDropDown = ({
    id,
    user,
    idToken,
    markNewsAsRead,
    hideNews,
    unhideNews,
    actions
}) => {
    const onMarkNewsAsRead = async () => {
        if (user) {
            try {
                const selectedNews = [id];

                await markNewsAsRead(selectedNews, idToken);
            } catch (err) {
                alert("Something went wrong while trying to mark news as read!");
            }
        }
    }

    const onHideNews = async () => {
        if (user) {
            try {
                const selectedNews = [id];

                await hideNews(selectedNews, idToken);
            } catch (err) {
                alert("Something went wrong while trying to hide news!");
            }
        }
    }

    const onUnhideNews = async () => {
        if (user) {
            try {
                const selectedNews = [id];

                await unhideNews(selectedNews, idToken);
            } catch (err) {
                alert("Something went wrong while trying to unhide news!");
            }
        }
    }

    return (
        <div className="news-options-dropdown">
            <span className="news-options-icon">
                <MoreIcon />
            </span>

            <ul className="news-options-dropdown-content">
                {actions?.includes(newsActionOptions.HIDE) 
                    ? (
                        <li onClick={onHideNews} id="hide">
                            <span>
                                <Unhide />
                            </span> 

                            Hide
                        </li>
                    ) : null
                }

                {actions?.includes(newsActionOptions.UNHIDE) 
                    ? (
                        <li onClick={onUnhideNews} id="unhide">
                            <span>
                                <Hide />
                            </span> 

                            Unhide
                        </li>
                    ) : null
                }


                {actions?.includes(newsActionOptions.MARK_AS_READ) 
                    ? (
                        <li onClick={onMarkNewsAsRead} id="markAsRead">
                            <span>
                                <Openbook />
                            </span>
                            
                            Mark as read
                        </li>
                    ) : null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken
})

const mapDispatchToProps = {
    markNewsAsRead,
    hideNews,
    unhideNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsOptionsDropDown);