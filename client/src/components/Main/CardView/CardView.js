import CardRow from './CardRow';
import './CardView.scss';

function CardView({ news, onMarkNewsReadLater }) {

    return (
        <div className="card-view-container">
            {
                news && [...news.keys()].map(key => <CardRow
                    key={key}
                    binder={key}
                    news={news.get(key)}
                    onMarkNewsReadLater={onMarkNewsReadLater} />)
            }
        </div>
    )
}

export default CardView;
