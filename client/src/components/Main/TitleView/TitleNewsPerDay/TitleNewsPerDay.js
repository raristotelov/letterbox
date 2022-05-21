import { useState } from 'react';
import TitleNewsElement from './TitleNewsElement';
import NewsOptions from '../../shared/NewsOptions';
import './TitleNewsPerDay.scss'

const TitleNewsPerDay = ({ publicationDate, news }) => {
    const [selectedNews, setSelectedNews] = useState([]);

    const addToCheckedList = (id) => {
        if (!selectedNews.includes(id)) {
            setSelectedNews(selectedNews.concat([id]));
        } else {
            setSelectedNews(selectedNews.filter(x => x !== id));
        }
    }

    return (
        <div className="daily-news">
            <section className="news-header">
                <h3>{publicationDate}</h3>
                {
                    selectedNews.length > 0 &&
                    <NewsOptions selectedNews={selectedNews}
                        setSelectedNews={setSelectedNews}
                        news={news} />
                }
            </section>
            <ul>
                {
                    news && news.map(x => (
                        <li key={x._id}>
                            <TitleNewsElement
                                news={x}
                                addToCheckedList={addToCheckedList}
                                selected={selectedNews.includes(x._id)} />
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default TitleNewsPerDay;