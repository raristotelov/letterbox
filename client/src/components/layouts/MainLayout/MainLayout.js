import { Fragment, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { connect } from 'react-redux';

import { getReadLaterNews, getReadNews, getHiddenNews } from '../../../actions/userActions';
import { getLabels, } from '../../../actions/labelActions';
import { getFeeds } from '../../../actions/feedActions';

import MyFeeds from '../../Main/MyFeeds';
import MyLabels from '../../Main/MyLabels';
import ReadLaterLink from '../../Main/ReadLaterLink';
import ReadHistoryLink from '../../Main/ReadHistoryLink';
import HiddenNewsLink from '../../Main/HiddenNewsLink';
import Header from '../../MainViewHeader/Header';
import Sidebar from '../../shared/Sidebar';
import { SearchProvider } from '../../../contexts/SearchContext';

import './MainLayout.scss';

const publicPaths = ['/how-it-works', '/sign-up', '/sign-in', '/signout', '/onboarding', '/forgotten-password'];

const MainLayout = ({ 
    children,
    user,
    idToken,
    getLabels,
    getFeeds,
    getReadLaterNews,
    getHiddenNews,
    getReadNews
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (user && idToken) {
            setIsLoading(true);

            const promises = [
                getLabels(idToken),
                getFeeds(idToken),
                getReadLaterNews(idToken),
                getHiddenNews(idToken),
                getReadNews(idToken)
            ];
    
            Promise.all(promises).then(() => setIsLoading(false));
        }
    }, [
        user,
        idToken,
        getLabels,
        getFeeds,
        getReadLaterNews,
        getHiddenNews,
        getReadNews
    ]);

    if (!user || location.pathname.includes('/news') || publicPaths.includes(location.pathname)) {
        return children;
    }

    return (
        <SearchProvider>
            <div className='main-layout-wrapper'>
                <Sidebar>
                    <div className='sidebar-content-wrapper'>
                        {!isLoading 
                            ? (
                                <Fragment>
                                    <MyLabels selected={location.pathname.includes('main')}/>

                                    <ReadLaterLink selected={location.pathname.includes('read-later')}/>

                                    <HiddenNewsLink selected={location.pathname.includes('hidden-news')}/>

                                    <ReadHistoryLink selected={location.pathname.includes('read-history')}/>

                                    <MyFeeds selected={location.pathname.includes('feed')}/>
                                </Fragment>
                            ) : null
                        }
                    </div>
                </Sidebar>

                <div className='main-layout-prime'>
                    <Header />

                    {children}
                </div>
            </div>
        </SearchProvider>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    idToken: state.user.idToken
})

const mapDispatchToProps = {
    getLabels,
    getFeeds,
    getReadLaterNews,
    getHiddenNews,
    getReadNews
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);