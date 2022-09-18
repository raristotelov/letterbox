import { useState, useEffect, Fragment, useContext } from 'react';
import { connect } from 'react-redux';

import { getReadLaterNews } from '../../actions/userActions';
import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import newsActionOptions from '../../helpers/newsActionOptions';
import { ViewContext } from '../../contexts/ViewContext';

import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import Loader from '../shared/Loader/Loader';

import './ReadLater.scss';

const newsActions = [newsActionOptions.HIDE, newsActionOptions.MARK_AS_READ];

const ReadLater = ({ user, idToken, readLaterNews, getReadLaterNews, hiddenNews }) => {
    const [news, setNews] = useState(transformReadLaterNews(readLaterNews));
    const [isLoading, setIsLoading] = useState(false);

    const viewContextObject = useContext(ViewContext);

    useEffect(() => {
        if (user && idToken) {
            setIsLoading(true);

            getReadLaterNews(idToken)
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                alert("Something went wrong while trying to fetch news to read later!");
            });
        }
    }, [user, idToken, getReadLaterNews])

    useEffect(() => {
        const filteredNews = readLaterNews?.filter((newsItem) => {
            if (hiddenNews.find((hiddenNewsItem) => hiddenNewsItem._id === newsItem._id)) {
                return false;
            }
    
            return true;
        })

        const data = transformReadLaterNews(filteredNews);

        setNews(data);
    }, [readLaterNews, hiddenNews])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const viewStyle = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleView,
    }

    const PageView = viewStyle[viewContextObject.selectedView];

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    return (
        <Fragment>
            <main className="read-later-main">
                <section className='read-later-title'>
                    <h1>Read Later</h1>

                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown
                            className="change-view-dropdown"
                        />
                    </div>
                </section>

                {
                    news?.size ? (
                        <section className="read-later-view">
                            <PageView
                                news={news}
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
    readLaterNews: state.user.readLaterNews,
    hiddenNews: state.user.hiddenNews
})

const mapDispatchToProps = {
    getReadLaterNews
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);