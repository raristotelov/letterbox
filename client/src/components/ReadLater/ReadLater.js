import { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import { getReadLater, clearReadLater } from '../../actions/userActions';
import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import { hideNews, markNewsReadLater } from '../../services/userService';
import { useClean } from '../../hooks';
import Loader from '../shared/Loader/Loader';

import './ReadLater.scss';

const ReadLater = ({ user, readLaterNews, getReadLater, clearReadLater }) => {
    const [news, setNews] = useState(transformReadLaterNews(readLaterNews));
    const [view, setView] = useState('magazineView');
    const [isLoading, setIsLoading] = useState(false);

    useClean(clearReadLater);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => {
                    setIsLoading(true);

                    return getReadLater(idToken)
                }).then(() => {
                    setIsLoading(false);
                })
                .catch(err => console.log(err));
        }
    }, [user, getReadLater])

    useEffect(() => {
        const data = transformReadLaterNews(readLaterNews);
        setNews(data);
    }, [readLaterNews])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const onMarkNewsReadLater = ({ id }) => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater([id], idToken);
                    console.log(id)
                })
                .catch(err => console.log(err));
        }
    }

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
            <main className="read-later-main">
                <section className='read-later-title'>
                    <h1>Read Later</h1>

                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown view={view} setView={setView} className="change-view-dropdown" />
                    </div>
                </section>

                {
                    news?.size ? (
                        <section className="read-later-view">
                            <PageView news={news} onMarkNewsReadLater={onMarkNewsReadLater} />
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
    readLaterNews: state.user.readLaterNews
})

const mapDispatchToProps = {
    getReadLater,
    clearReadLater
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);