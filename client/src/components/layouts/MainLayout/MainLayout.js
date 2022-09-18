import { useLocation } from "react-router-dom"

import MyFeeds from '../../Main/MyFeeds';
import MyLabels from '../../Main/MyLabels';
import ReadLaterLink from '../../Main/ReadLaterLink';
import ReadHistoryLink from '../../Main/ReadHistoryLink';
import HiddenNewsLink from '../../Main/HiddenNewsLink';
import Header from '../../MainViewHeader/Header';
import Sidebar from '../../shared/Sidebar';
import { SearchProvider } from '../../../contexts/SearchContext';

import './MainLayout.scss';

const MainLayout = ({ children, activeUser }) => {
    const location = useLocation();

    if (!activeUser) {
        return children;
    }

    return (
        <SearchProvider>
            <div className='main-layout-wrapper'>
                <Sidebar>
                    <div className='sidebar-content-wrapper'>
                        <MyLabels selected={location.pathname.includes('main')}/>

                        <ReadLaterLink selected={location.pathname.includes('read-later')}/>

                        <ReadHistoryLink selected={location.pathname.includes('read-history')}/>

                        <HiddenNewsLink selected={location.pathname.includes('hidden-news')}/>

                        <MyFeeds selected={location.pathname.includes('feed')}/>
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

export default MainLayout;