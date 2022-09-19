import HowToStartCard from './HowToStartCard/HowToStartCard';
import { ReactComponent as HowToStartImage } from './assets/HowToStartImage.svg';
import './HowToStart.scss';

const HowToStart = () => {
    return (
        <div className="how-to-start-container">
            <h2 className="title">How to start your Letterbox experience?</h2>

            <section className="card-container">
                <HowToStartCard
                    title={'Create An Account'}
                    description={`Use the 7-days free trial option or some of our subscription plans.`}
                />

                <HowToStartCard
                    title={'Check Your Letterbox'}
                    description={`You can use all features, even during the trial period. ${'\n'}Try them for FREE.`}
                />

                <HowToStartCard
                    title={'Start to enjoy'}
                    description={`Subscribe to newsletters with your Letterbox email. Enjoy the world of newsletters.`}
                />
            </section>

            <HowToStartImage />

        </div>
    );
}

export default HowToStart;