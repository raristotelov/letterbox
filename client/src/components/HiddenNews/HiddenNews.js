import { useState, useEffect, Fragment, useContext } from 'react';
import { connect } from 'react-redux';

import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import newsActionOptions from '../../helpers/newsActionOptions';
import { getHiddenNews } from '../../actions/userActions';
import { ViewContext } from '../../contexts/ViewContext';
import { SearchContext } from '../../contexts/SearchContext';

import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import Loader from '../shared/Loader/Loader';

import './HiddenNews.scss';

const newsActions = [newsActionOptions.UNHIDE]

const HiddenNews = ({ user, idToken, hiddenNews, getHiddenNews }) => {
    const [readHistoryNews, setReadHistoryNews] = useState(transformReadLaterNews(hiddenNews));
    const [isLoading, setIsLoading] = useState(false);

    const viewContextObject = useContext(ViewContext);
    const searchContextObject = useContext(SearchContext);

    useEffect(() => {
        if (user && idToken) {
            setIsLoading(true);

            getHiddenNews(idToken)
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                alert("Something went wrong while trying to fetch hidden news!");
            });
        }
    }, [user, idToken, getHiddenNews])

    useEffect(() => {
        const filterednews = hiddenNews
            .filter((newsItem) => newsItem.title.toLowerCase().includes(searchContextObject.search.toLowerCase()));

        const data = transformReadLaterNews(filterednews);

        setReadHistoryNews(data);
    }, [hiddenNews, searchContextObject])

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
            <main className="hidden-news-main">
                <section className='hidden-news-title'>
                    <h1>Hidden news</h1>

                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown
                            className="change-view-dropdown"
                        />
                    </div>
                </section>

                {
                    readHistoryNews?.size ? (
                        <section className="hidden-news-view">
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
    hiddenNews: state.user.hiddenNews
})

const mapDispatchToProps = {
    getHiddenNews
}

export default connect(mapStateToProps, mapDispatchToProps)(HiddenNews);