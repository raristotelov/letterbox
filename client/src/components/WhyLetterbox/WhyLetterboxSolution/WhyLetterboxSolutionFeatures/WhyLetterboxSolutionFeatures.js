import { ReactComponent as FlySwatter } from './assets/FlySwatter.svg';
import { ReactComponent as Hourglass } from './assets/Hourglass.svg';
import { ReactComponent as Document } from './assets/Document.svg';
import { ReactComponent as Ads } from './assets/Ads.svg';

import WhyLetterboxSolutionFeature from './WhyLetterboxSolutionFeature/WhyLetterboxSolutionFeature';

import "./WhyLetterboxSolutionFeatures.scss";

const WhyLetterboxSolutionFeatures = () => {
    return (
        <div className='features-container'>
            <WhyLetterboxSolutionFeature 
                icon={FlySwatter}
                header={'Kill The Spam'}
                text={'Get your own Newsletter email. Subscribe with one-click for the most relevant newsletters and avoid the spam.'}
            />

            <WhyLetterboxSolutionFeature 
                icon={Hourglass}
                header={'Save your time'}
                text={'Organize all your favorite newsletters into one application. Use all features to manage them. Control your feed.'}
            />

            <WhyLetterboxSolutionFeature 
                icon={Document}
                header={'Find Top Content'}
                text={'Select categories according to your interests and find the best newsletters for you in our application.'}
            />

            <WhyLetterboxSolutionFeature 
                icon={Ads}
                header={'Skip Ads'}
                text={'Everybody like to read newsletters without any ads, pop-ups and all kinds of "shocking" marketing activities.'}
            />
        </div>
    )
}

export default WhyLetterboxSolutionFeatures;
