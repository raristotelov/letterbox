import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as UncheckedIcon } from '../../../shared/assets/checkbox-unchecked.svg';
import { ReactComponent as CheckedIcon } from '../../../shared/assets/checkbox-checked.svg';
import CardOptions from '../../../shared/CardOptions';
import './MagazineViewCard.scss';

const MagazineViewCard = ({ addToSelected, removeFromSelected, news, selected, onMarkNewsReadLater }) => {
    const [checked, setChecked] = useState(selected);

    useEffect(() => {
        setChecked(selected);
    }, [selected]);

    const onCheck = () => {
        if (checked) {
            removeFromSelected(news._id);
        } else {
            addToSelected(news._id);
        }
        setChecked(!checked);
    }

    return (
        <article className="magazine-view-card">
            <section className="checkbox-container" onClick={onCheck}>
                {checked ? <CheckedIcon /> : <UncheckedIcon />}
            </section>

            <section className="title-container">
                <Link to={`/news/${news._id}`} className="link-not-decorated"><h3>{news.title}</h3></Link>


                <section className="info-container">
                    <p className="date">{new Date(news.date).toDateString().substring(4)}</p>
                    <p className="newsletter">{news.newsletter.name}</p>
                    <p className="read-time">{news.readTime} min read</p>

                    <CardOptions id={news._id} onMarkNewsReadLater={onMarkNewsReadLater}/>
                </section>
            </section>

            <section className="img-container">
                <img src={news.image} alt="" />
            </section>
        </article>
    );
}

export default MagazineViewCard;