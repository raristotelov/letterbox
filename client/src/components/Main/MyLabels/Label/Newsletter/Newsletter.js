import { Link, useLocation } from 'react-router-dom';

import './Newsletter.scss';

let labelsWrapper = document.querySelector('.my-labels-wrapper');

const closeAllNews = (el, cls) => {
    if (el && cls) {
        el.querySelectorAll('.label-newsletter').forEach(x => x.classList.remove(cls));
    }
}

const Newsletter = ({ newsletter }) => {
    const location = useLocation();

    if (!location.pathname.includes('main')) {
        closeAllNews(labelsWrapper, 'open');
    }

    const handleNewsletterClick = (e) => {
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
                    <div className="circle">{newsletter.name.substring(0, 2).toUpperCase()}</div>

                    <span className="label-newsletter-title">{newsletter.name}</span>
                </div>

                <span className="label-newsletter-counter">{newsletter.news.length} new</span>
            </div>
        </Link>
    );
}

export default Newsletter;