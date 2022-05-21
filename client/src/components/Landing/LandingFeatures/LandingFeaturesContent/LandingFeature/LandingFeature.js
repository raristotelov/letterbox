import './LandingFeature.scss'

const LandingFeature = ({ title, description }) => {
    return (
        <div className="landing-feature">
            <h4 className="feature-title">{title}</h4>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default LandingFeature;
