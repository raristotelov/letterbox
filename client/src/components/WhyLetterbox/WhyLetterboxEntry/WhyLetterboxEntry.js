import { ReactComponent as WhyImage } from './assets/Frame.svg';

import './WhyLetterboxEntry.scss';

const WhyLetterboxEntry = () => {
    return (
        <div className="how-it-works-entry-container">
            <section className="description-container">
                <h1 className="title">With Letterbox you will:</h1>

                <p className="description">with Letterbox you will:</p>
            </section>

            <section className="image-container">
                <WhyImage />
            </section>
        </div>
    );
}

export default WhyLetterboxEntry;