import { ReactComponent as Discover } from './asserts/Discover.svg';
import { ReactComponent as MakeReading } from './asserts/MakeReading.svg';
import { ReactComponent as OneClick } from './asserts/OneClick.svg';
import { ReactComponent as YourOwn } from './asserts/YourOwn.svg';
import ComingSoonFeature from './ComingSoonFeature';

import './ComingSoonFeatures.scss'

const Features = () => {
    return (
        <div className="features">
            <ComingSoonFeature icon={<OneClick />} 
                titleFirstRow="One-Click"    
                titleSecondRow="Unsubscribe" 
                contentFirstRow="Don’t like what you’re reading?"
                contentSecondRow="Remove the feed and"              
                contentThirdRow="never see it again." />
            <ComingSoonFeature icon={<YourOwn />} 
                titleFirstRow="Your Own"            
                titleSecondRow="Newsletter-app Email" 
                contentFirstRow="See something cool on the web?"
                contentSecondRow="Subscribe with your new"
                contentThirdRow="custom email." />
            <ComingSoonFeature icon={<Discover />} 
                titleFirstRow="Discover"                                 
                titleSecondRow="Top Newsletters" 
                contentFirstRow="Browse through your interests"
                contentSecondRow="and find the hottest newsletters"
                contentThirdRow="in that space." />
            <ComingSoonFeature icon={<MakeReading />} 
                titleFirstRow="Make Reading"         
                titleSecondRow="Pleasant Again"
                contentFirstRow="Group newsletters into folders," 
                contentSecondRow="quickly mark as read, switch"
                contentThirdRow="between day/night mode." />
        </div>
    )
}

export default Features;