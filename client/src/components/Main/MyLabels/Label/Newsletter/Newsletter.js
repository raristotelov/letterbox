import ExampleAvatar from './assets/example-avatar.png';
import { Link } from 'react-router-dom';
import './Newsletter.scss';

const Newsletter = ({ newsletter }) => {

    const handleNewsletterClick = (e) => {
        let labelsWrapper = document.querySelector('.my-labels-wrapper');

        const closeAllNews = (el, cls) => {
            el.querySelectorAll('.label-newsletter').forEach(x => x.classList.remove(cls));
        }

        const openNew = (el) => {
            closeAllNews(labelsWrapper, 'open');

            if (!el.classList.contains('open')) el.classList.add('open');
        }

        openNew(e.currentTarget);
    }

    return (
        <Link to={`/main/${newsletter._id}`}>
            <div className="label-newsletter" onClick={handleNewsletterClick}>
                <div>
                    <img className="label-newsletter-avatar" src={ExampleAvatar} alt="Example Avatar" />
                    <span className="label-newsletter-title">{newsletter.name}</span>
                </div>
                <span className="label-newsletter-counter">{newsletter.news.length} new</span>
            </div>
        </Link>
    );
}

export default Newsletter;