import { ReactComponent as HammerMan } from './assets/HammerMan.svg';

import './LearnToRead.scss';

const LearnToRead = () => {
    return (
        <div className="learn-to-read-container">
            <section className="description-container">
                <h1 className="title">"Once you learn to read, you will be forever free"</h1>

                <p className="description">Frederick Douglas</p>
            </section>

            <section className="image-container">
                <HammerMan />
            </section>
        </div>
    );
}

export default LearnToRead;