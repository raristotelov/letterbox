import LandingFeature from './LandingFeature';
import './LandingFeaturesContent.scss'

const LandingFeaturesContent = () => {
    return (
        <div className="landing-features-content">
            <div className="first-row">
                <LandingFeature 
                    title="Your Own Letterbox Email"
                    description="Be part of Letterbox community.
                    Join top experts for a chat on the topics and trends that matter to you."
                    />

                <LandingFeature 
                    title="One-Click Unsubscribe"
                    description="Don’t like what you’re reading? Remove the feed and never see it again."
                    />
            </div>

            <div className="second-row">
                <LandingFeature 
                    title="Be part of Letterbox community"
                    description="Join top experts for a chat on the topics and trends that m-atter to you."
                    />

                <LandingFeature 
                    title="Choose your pricing plan"
                    description="Take your reading and sharing to the next level with some of our pricing plans - bronze, silver or gold."
                    />
            </div>
            
            <div className="third-row">
                <LandingFeature 
                    title="Discover"
                    description="Browse through your interests and find the hottest newsletters in that space."
                    />
                <LandingFeature 
                    title="Enjoy"
                    description="Group newsletters into folders, quickly mark as read, switch between day/night mode."
                    />
            </div>
        </div>
    );
};

export default LandingFeaturesContent;
