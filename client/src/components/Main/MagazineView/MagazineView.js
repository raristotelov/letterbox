import './MagazineView.scss';
import MagazineViewList from './MagazineViewList';

const MagazineView = ({ news, onMarkNewsReadLater }) => {
    return (
        <div className="magazine-view-container">
            {
                news && [...news.keys()].map(key => <MagazineViewList
                    key={key}
                    binder={key}
                    news={news.get(key)} 
                    onMarkNewsReadLater={onMarkNewsReadLater}/>)
            }
        </div>
    );
}

export default MagazineView;