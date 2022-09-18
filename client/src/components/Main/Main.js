import { Fragment, useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getNewsletter } from '../../actions/newsletterActions';
import transformNewsletterNews from '../../helpers/transformNewsletterNews';
import newsActionOptions from '../../helpers/newsActionOptions';
import { ViewContext } from '../../contexts/ViewContext';

import ChangeViewDropDown from './ChangeViewDropDown';
import TitleView from './TitleView';
import MagazineView from './MagazineView';
import CardView from './CardView';
import Loader from '../shared/Loader/Loader';

import './Main.scss';

const newsActions = [newsActionOptions.READ_LATER, newsActionOptions.HIDE, newsActionOptions.MARK_AS_READ];

const Main = ({
    match,
    user,
    idToken,
    newsletter,
    hiddenNews,
    getNewsletter
}) => {
    const [news, setNews] = useState(null);
    const [view, setView] = useState('magazineView');
    const [isLoading, setIsLoading] = useState(false);

    const viewContextObject = useContext(ViewContext);

    const { newsletterId } = match.params;

    let history = useHistory();

    if (!user) {
        history.push('/');
    }

    useEffect(() => {
        if (user && idToken) {
            setIsLoading(true);

            getNewsletter(newsletterId, idToken)
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                alert("Something went wrong while trying to fetch newsletter!")
            });
        }
    }, [newsletterId, user, getNewsletter, idToken]);

    useEffect(() => {
        const filteredNews = newsletter?.news?.filter((newsItem) => {
            if (hiddenNews.find((hiddenNewsItem) => hiddenNewsItem._id === newsItem._id)) {
                return false;
            }
    
            return true;
        })

        const data = transformNewsletterNews(filteredNews);

        setNews(data);
    }, [newsletter, hiddenNews]);

    const viewStyle = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleView,
    }

    const PageView = viewStyle[viewContextObject.selectedView]

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    return (
        <Fragment>
            <main className='main-wrapper'>
                <section className='main-title'>
                    <h1>Main Page</h1>
                    
                    <div className='change-view-dropdown-container'>
                        <ChangeViewDropDown view={view} setView={setView} className='change-view-dropdown' />
                    </div>
                </section>

                {news?.size
                    ? (
                        <Fragment>
                            <h2>{newsletter.name}</h2>

                            <section className='view-wrapper'>
                                <PageView
                                    news={news}
                                    newsActions={newsActions}
                                />
                            </section>
                        </Fragment>
                    ) : (
                        <span className='no-information'>
                            Section is empty.
                        </span>
                    )
                }
            </main>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken,
    hiddenNews: state.user.hiddenNews,
    newsletter: state.newsletter.newsletter
})

const mapDispatchToProps = {
    getNewsletter
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
