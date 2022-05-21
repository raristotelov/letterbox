import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardOptions from '../../../shared/CardOptions';
import { ReactComponent as UncheckedIcon } from '../../../shared/assets/checkbox-unchecked.svg';
import { ReactComponent as CheckedIcon } from '../../../shared/assets/checkbox-checked.svg';
import './Card.scss';

function Card({ news, addToSelected, removeFromSelected , selected, onMarkNewsReadLater}) {
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
        <article className="card-view-card">
            <div className="img-container">
                <Link to={`/news/${news._id}`} className="link-not-decorated">
                    <img src={news.image} alt=""></img>
                </Link>
            </div>

            <div className="title-container">
                <Link to={`/news/${news._id}`} className="link-not-decorated"><h3>{news.title}</h3></Link>

                <div className="info-container">
                    <p className="date">{new Date(news.date).toDateString().substring(4)}</p>
                    <p className="newsletter">{news.newsletter.name}</p>
                    <p className="read-time">{news.readTime} min read</p>
                </div>
            </div>

            <div className="options-container">
                <div className="checkbox-container" onClick={onCheck}>
                    {checked ? <CheckedIcon /> : <UncheckedIcon />}
                </div>

                <CardOptions id={news._id} onMarkNewsReadLater={onMarkNewsReadLater} />
            </div>
        </article>
    );
}

export default Card;
