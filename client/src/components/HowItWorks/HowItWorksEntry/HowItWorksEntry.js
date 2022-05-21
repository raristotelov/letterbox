import { ReactComponent as WorkingImage } from './assets/Frame.svg';
import './HowItWorksEntry.scss';

const HowItWorksEntry = () => {
    return (
        <div className="how-it-works-entry-container">
            <section className="description-container">
                <h1 className="title">How it works?</h1>
                <p className="description">Newsletter-App is a brand new application for newsletters reading.</p>

                <button className="how-it-works-btn">How it Works</button>
            </section>

            <section className="image-container">
                <WorkingImage />
            </section>
        </div>
    );
}

export default HowItWorksEntry;