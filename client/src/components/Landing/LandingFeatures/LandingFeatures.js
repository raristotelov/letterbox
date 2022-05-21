import LandingFeaturesHeader from './LandingFeaturesHeader';
import LandingFeaturesContent from './LandingFeaturesContent';
import './LandingFeatures.scss'

const LandingFeatures = () => {
    return (
        <section className="landing-features">
            <LandingFeaturesHeader />
            <LandingFeaturesContent />
        </section>
    );
};

export default LandingFeatures;
