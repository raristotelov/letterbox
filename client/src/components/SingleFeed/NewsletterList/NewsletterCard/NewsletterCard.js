import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { removeNewsletter } from '../../../../actions/feedActions';
import { ReactComponent as RemoveIcon } from '../../assets/remove-icon.svg';
import './NewsletterCard.scss';

const NewsletterCard = ({ user, labels, admin, feed, newsletter, setAddToLabelOpen, removeNewsletter }) => {
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (labels.some(x => x.newsletters.some(y => y._id === newsletter._id))) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }, [labels, newsletter]);

    const handleRemove = () => {
        if (user) {
            user.getIdToken()
                .then(async (idToken) => await removeNewsletter(newsletter._id, feed._id, idToken))
                .catch(console.log);
        }
    }

    return (
        <article className="newsletter-card" data-testid="newsletter-card">
            <section className="newsletter-img-container">
                <img src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" alt="logo"></img>
            </section>

            <section className="newsletter-info-container">
                <h3 className="newsletter-name" data-testid="newsletter-card-name">{newsletter.name}</h3>
                <p className="newsletter-description" data-testid="newsletter-card-address">{newsletter.address}</p>
            </section>

            <section className="newsletter-subscribe-btn-container">
                <button
                    onClick={() => setAddToLabelOpen(newsletter._id)}
                    className={`btn ${subscribed ? 'unsubscribe-btn' : 'subscribe-btn'}`} >
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>

                {admin && <button className="newsletter-remove-btn" onClick={handleRemove}><RemoveIcon /></button>}
            </section>
        </article>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    labels: state.label.labels,
    admin: state.user.admin,
    feed: state.feed.feed
})

const mapDispatchToProps = {
    removeNewsletter
}

export { NewsletterCard };
export default connect(mapStateToProps, mapDispatchToProps)(NewsletterCard);