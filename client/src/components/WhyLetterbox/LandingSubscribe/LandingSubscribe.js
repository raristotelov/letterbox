import LandingSubscribeText from './LandingSubscribeText';
import { ReactComponent as SubscribeCards } from './assets/subscribe-cards-icon.svg';
import './LandingSubscribe.scss';

const LandingSubscribe = () => {
    return(
        <section className="landing-subscribe">
            
            <LandingSubscribeText />
            

            <div className="landing-subscribe-image">
                <SubscribeCards />
            </div>
        </section>
    );
}

export default LandingSubscribe;