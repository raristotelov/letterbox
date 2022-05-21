import { useState } from 'react';
import NewsOptions from '../../shared/NewsOptions';
import MagazineViewCard from './MagazineViewCard';

import './MagazineViewList.scss';

const MagazineViewList = ({ binder, news, onMarkNewsReadLater}) => {
    const [selectedNews, setSelectedNews] = useState([]);

    const addToSelected = (id) => {
        if (!selectedNews.includes(id)) {
            setSelectedNews(selectedNews.concat([id]));
        }
    }

    const removeFromSelected = (id) => {
        setSelectedNews(selectedNews.filter(x => x !== id));
    }

    return (
        <div className="magazine-view-list">

            <header className="magazine-view-list-header">
                <p className="binder">{binder}</p>
                {
                    selectedNews.length > 0 &&
                    <NewsOptions 
                        selectedNews={selectedNews}
                        setSelectedNews={setSelectedNews}
                        news={news} />
                }
            </header>

            <div className="magazine-view-cards-container">
                {
                    news && news.map(x => <MagazineViewCard
                        key={x._id}
                        news={x}
                        addToSelected={addToSelected}
                        removeFromSelected={removeFromSelected}
                        selected={selectedNews.includes(x._id)} 
                        onMarkNewsReadLater={onMarkNewsReadLater}/>)
                }
            </div>
        </div>
    );
}

export default MagazineViewList;