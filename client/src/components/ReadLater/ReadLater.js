import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import { getReadLater, clearReadLater } from '../../actions/userActions';
import MainLayout from '../layouts/MainLayout/MainLayout';
import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import { hideNews, markNewsReadLater } from '../../services/userService';
import { useClean } from '../../hooks';
import './ReadLater.scss';

const ReadLater = ({ user, readLaterNews, getReadLater, clearReadLater }) => {
    const [news, setNews] = useState(transformReadLaterNews(readLaterNews));
    const [view, setView] = useState('magazineView');

    useClean(clearReadLater);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(getReadLater)
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

    return (
        <MainLayout>
            <main className="read-later-main">
                <section className='read-later-title'>
                    <h1>Read Later</h1>
                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown view={view} setView={setView} className="change-view-dropdown" />
                    </div>
                </section>

                <section className="read-later-view">
                    <PageView news={news} onMarkNewsReadLater={onMarkNewsReadLater} />
                </section>
            </main>
        </MainLayout >
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