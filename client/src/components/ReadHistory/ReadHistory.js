import { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import newsActionOptions from '../../helpers/newsActionOptions';
import { getReadNews } from '../../actions/userActions';
import { markNewsAsReadLaterService } from '../../services/userService';

import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import Loader from '../shared/Loader/Loader';

import './ReadHistory.scss';

const newsActions = [newsActionOptions.READ_LATER, newsActionOptions.HIDE];

const ReadHistory = ({ user, idToken, readNews, hiddenNews, getReadNews }) => {
    const [readHistoryNews, setReadHistoryNews] = useState(transformReadLaterNews(readNews));
    const [view, setView] = useState('magazineView');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user && idToken) {
            setIsLoading(true);

            getReadNews(idToken)
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                alert("Something went wrong while trying to fetch read history!");
            });
        }
    }, [user, idToken, getReadNews])

    useEffect(() => {
        const filteredNews = readNews?.filter((newsItem) => {
            if (hiddenNews.find((hiddenNewsItem) => hiddenNewsItem._id === newsItem._id)) {
                return false;
            }
    
            return true;
        })

        const data = transformReadLaterNews(filteredNews);

        setReadHistoryNews(data);
    }, [readNews, hiddenNews])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const viewStyle = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleView,
    }

    const PageView = viewStyle[view];

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    return (
        <Fragment>
            <main className="read-history-main">
                <section className='read-history-title'>
                    <h1>Read History</h1>

                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown view={view} setView={setView} className="change-view-dropdown" />
                    </div>
                </section>

                {
                    readHistoryNews?.size ? (
                        <section className="read-history-view">
                            <PageView
                                news={readHistoryNews}
                                newsActions={newsActions} 
                            />
                        </section>
                    ) : (
                        <span className='no-information'>
                            Section is empty.
                        </span>
                    )
                }
            </main>
        </Fragment >
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken,
    readNews: state.user.readNews,
    hiddenNews: state.user.hiddenNews
})

const mapDispatchToProps = {
    getReadNews
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadHistory);