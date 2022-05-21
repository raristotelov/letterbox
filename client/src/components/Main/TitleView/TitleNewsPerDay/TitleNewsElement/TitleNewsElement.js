import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardOptions from '../../../shared/CardOptions';
import { ReactComponent as CheckboxUnchecked } from '../../../shared/assets/checkbox-unchecked.svg'
import { ReactComponent as CheckboxChecked } from '../../../shared/assets/checkbox-checked.svg'

import './TitleNewsElement.scss';

const TitleNewsElement = ({ news, addToCheckedList, selected }) => {
    const [checked, setChecked] = useState(selected);

    useEffect(() => {
        setChecked(selected);
    }, [selected]);

    const checkElement = (e) => {
        setChecked(() => !checked);
        addToCheckedList(news._id);
    }

    return checked
        ? <article className='title-news-element checked' id={news._id}>
            <section onClick={checkElement}><CheckboxChecked /></section>
            <Link to={`/news/${news._id}`} className="link-not-decorated">
                <section className='title'>{news.title}</section>
            </Link>
            <section className='publicationDate'>{new Date(news.date).toDateString().substring(4)}</section>
            <section className='publisher'>{news.newsletter.name}</section>
            <section className='expectedReadingTime'><CardOptions id={news._id} /></section>
        </article>

        : <article className='title-news-element' id={news._id}>
            <section onClick={checkElement}><CheckboxUnchecked /></section>
            <Link to={`/news/${news._id}`} className="link-not-decorated">
                <section className='title'>{news.title}</section>
            </Link>
            <section className='publicationDate'>{new Date(news.date).toDateString().substring(4)}</section>
            <section className='publisher'>{news.newsletter.name}</section>
            <section className='expectedReadingTime'>{news.readTime} min read</section>
        </article>
}

export default TitleNewsElement;

