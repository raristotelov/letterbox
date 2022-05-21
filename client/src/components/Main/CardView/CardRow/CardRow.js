import { useState } from 'react';
import NewsOptions from '../../shared/NewsOptions';
import Card from './Card';
import './CardRow.scss';

function CardRow({ binder, news, onMarkNewsReadLater }) {
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
        <div className="card-row-container">
            <div className="binder-container">
                <h3>{binder}</h3>
                {
                    selectedNews.length > 0
                    && <NewsOptions selectedNews={selectedNews}
                        setSelectedNews={setSelectedNews}
                        news={news} />
                }
            </div>

            <div className="card-container">
                {
                    news && news.map(x => <Card
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

export default CardRow;
