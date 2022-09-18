import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import './Newsletter.scss';

const closeAllNews = (el, cls) => {
    if (el && cls) {
        el.querySelectorAll('.label-newsletter').forEach(x => x.classList.remove(cls));
    }
}

const Newsletter = ({ newsletter, readNews, hiddenNews }) => {
    let labelsWrapper = document.querySelector('.my-labels-wrapper');

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

    const news = newsletter.news?.filter((newsItem) => {
        if (readNews.find((readNewsItem) => readNewsItem._id === newsItem)) {
            return false;
        }

        if (hiddenNews.find((hiddenNewsItem) => hiddenNewsItem._id === newsItem)) {
            return false;
        }

        return true;
    })

    return (
        <Link to={`/main/${newsletter._id}`}>
            <div className="label-newsletter" onClick={handleNewsletterClick}>
                <div>
                    <div className="circle">{newsletter.name.substring(0, 2).toUpperCase()}</div>

                    <span className="label-newsletter-title">{newsletter.name}</span>
                </div>

                {news?.length 
                    ? (
                        <span className="label-newsletter-counter">{news.length} new</span>
                    ) : null
                }
            </div>
        </Link>
    );
}

const mapStateToProps = state => ({
    readNews: state.user.readNews,
    hiddenNews: state.user.hiddenNews
})

export default connect(mapStateToProps)(Newsletter);