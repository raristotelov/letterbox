import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import NewsOptionsDropDown from '../NewsOptionsDropDown';
import './CardOptions.scss';

const CardOptions = ({ id, onMarkNewsReadLater }) => {

    return (
        <section className="news-card-options">
            <Bookmark onClick={()=>{onMarkNewsReadLater({id})}}/>
            <ShareIcon />
            <NewsOptionsDropDown id={id} />
        </section>
    );
}

export default CardOptions;