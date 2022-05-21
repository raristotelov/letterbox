import { connect } from 'react-redux';
import { addNewsletter } from '../../../../actions/feedActions'
import './Newsletter.scss';

const Newsletter = ({ newsletter, user, feed, addNewsletter }) => {

    const handleClick = () => {
        if (user) {
            user.getIdToken()
                .then(async (idToken) => await addNewsletter(newsletter, feed._id, idToken))
                .catch(console.log);
        }
    }

    return (
        <div className="add-to-feed-newsletter" onClick={handleClick}>
            <img src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" alt="logo"></img>

            <h4>{newsletter.name}</h4>

            <h3 className="add">ADD</h3>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    feed: state.feed.feed
})

const mapDispatchToProps = {
    addNewsletter
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);