import CardRow from './CardRow';
import './CardView.scss';

function CardView({ news, onMarkNewsReadLater, newsActions }) {

    return (
        <div className="card-view-container">
            {
                news && [...news.keys()].map(key => (
                    <CardRow
                        key={key}
                        binder={key}
                        news={news.get(key)}
                        newsActions={newsActions}
                    />
                ))
            }
        </div>
    )
}

export default CardView;
