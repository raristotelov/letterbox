import { ReactComponent as Line } from './assets/line.svg';
import './HowToStartCard.scss';

const HowToStartCard = ({ title, description }) => {
    return (
        <article className="how-to-start-card">
            <section className="line-container">
                <Line />
            </section>

            <section className="content-container">
                <h6 className="how-to-start-card-title">{title}</h6>

                <p className="how-to-start-card-description">{description}</p>
            </section>
        </article>
    );
}

export default HowToStartCard;