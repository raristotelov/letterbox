import { FacebookShareButton } from 'react-share';
import { connect } from 'react-redux';

import {
    markNewsAsReadLater,
} from '../../../../actions/userActions';
import newsActionOptions from '../../../../helpers/newsActionOptions';

import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import NewsOptionsDropDown from '../NewsOptionsDropDown';

import './CardOptions.scss';

const CardOptions = ({ id, user, idToken, markNewsAsReadLater, newsTitle, actions }) => {
    const onMarkNewsAsReadLater = async (id) => {
        if (user) {
            try {
                const selectedItems = [id];

                await markNewsAsReadLater(selectedItems, idToken);
            } catch (err) {
                alert("Something went wrong while trying to mark item for read later!");
            }
        }
    }

    return (
        <section className="news-card-options">
            {actions?.includes(newsActionOptions.READ_LATER) 
                ? (
                    <div className='news-option'>
                        <Bookmark onClick={() => onMarkNewsAsReadLater(id)}/>
                    </div>
                ) : null
            }

            <div className='news-option'>
                <FacebookShareButton 
                    url={"https://letterbox-binary-zone.web.app/"}
                    quote={newsTitle}
                    hashtag="#news #letterbox"
                >
                    <ShareIcon />
                </FacebookShareButton>
            </div>
            
            <div>
                <NewsOptionsDropDown
                    id={id}
                    actions={actions}
                />
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken
})

const mapDispatchToProps = {
    markNewsAsReadLater,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOptions);