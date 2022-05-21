import MyFeeds from '../../Main/MyFeeds';
import MyLabels from '../../Main/MyLabels';
import ReadLaterLink from '../../Main/ReadLaterLink';
import ReadHistoryLink from '../../Main/ReadHistoryLink';
import Header from '../../MainViewHeader/Header';
import Sidebar from '../../shared/Sidebar';
import { SearchProvider } from '../../../contexts/SearchContext';
import './MainLayout.scss';

const MainLayout = ({ children }) => {

    return (
        <SearchProvider>
            <div className="main-layout-wrapper">
                <Sidebar>
                    <div className="sidebar-content-wrapper">
                        <MyLabels />
                        <ReadLaterLink />
                        <ReadHistoryLink />
                        <MyFeeds />
                    </div>
                </Sidebar>

                <div className="main-layout-prime">
                    <Header />

                    {children}
                </div>
            </div>
        </SearchProvider>
    );
}

export default MainLayout;