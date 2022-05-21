import LandingNav from '../Landing/LandingHeader/LandingNav';
import HowItWorksEntry from './HowItWorksEntry';
import HowToStart from './HowToStart';
import WelcomeToNewsletterApp from './WelcomeToNewsletterApp';
import ChooseViewMode from './ChooseViewMode';
import Personalize from './Personalize/Personalize';
import Community from './Community/Community';
import LandingSubscribe from '../Landing/LandingSubscribe';
import LandingFooter from '../Landing/LandingFooter';
import './HowItWorks.scss';

const HowItWorks = () => {
    return (
        <div className="how-it-works-wrapper">
            <LandingNav />

            <HowItWorksEntry />

            <HowToStart />

            <WelcomeToNewsletterApp />

            <ChooseViewMode />

            <Personalize />

            <Community />

            <LandingSubscribe />

            <LandingFooter />
        </div>
    );
}

export default HowItWorks;