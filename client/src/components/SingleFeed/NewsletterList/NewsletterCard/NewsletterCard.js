import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
    removeNewsletterFromLabel,
    getLabels,
    unsubscribeFromNewsletterInAllLabels
} from '../../../../actions/labelActions';
import { removeNewsletter } from '../../../../actions/feedActions';

import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg';

import './NewsletterCard.scss';

const NewsletterCard = ({
    user,
    idToken,
    labels,
    admin,
    feed,
    newsletter,
    setAddToLabelOpen,
    removeNewsletter,
    removeNewsletterFromLabel,
    getLabels,
    unsubscribeFromNewsletterInAllLabels
}) => {
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (labels.some(x => x.newsletters.some(y => y._id === newsletter._id))) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }, [labels, newsletter]);

    const handleRemove = async () => {
        if (user && idToken) {
            await removeNewsletter(newsletter._id, feed._id, idToken);
        }
    }

    const unsubscribeFromNewsletter = async (newsletterId) => {
       await unsubscribeFromNewsletterInAllLabels(newsletterId, idToken);
    }

    const buttonAction = subscribed ? () => unsubscribeFromNewsletter(newsletter._id) : () => setAddToLabelOpen(newsletter._id);

    return (
        <article className="newsletter-card" data-testid="newsletter-card">
            <section className="newsletter-img-container">
                <img src="/newsletter.jpg" alt="logo"></img>
            </section>

            <section className="newsletter-info-container">
                <h3 className="newsletter-name" data-testid="newsletter-card-name">{newsletter.name}</h3>
                
                <p className="newsletter-description" data-testid="newsletter-card-address">{newsletter.address}</p>
            </section>

            <section className="newsletter-subscribe-btn-container">
                <button
                    onClick={buttonAction}
                    className={`btn ${subscribed ? 'unsubscribe-btn' : 'subscribe-btn'}`}
                >
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>

                {admin 
                    ? (
                        <button
                            className="newsletter-remove-btn"
                            onClick={handleRemove}
                        >
                            <RemoveIcon />
                        </button>
                    ) : null
                }
            </section>
        </article>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    idToken: state.user.idToken,
    labels: state.label.labels,
    admin: state.user.admin,
    feed: state.feed.feed
})

const mapDispatchToProps = {
    removeNewsletter,
    removeNewsletterFromLabel,
    getLabels,
    unsubscribeFromNewsletterInAllLabels
}

export { NewsletterCard };
export default connect(mapStateToProps, mapDispatchToProps)(NewsletterCard);