import Header from "./ComingSoonHeader";
import Features from './ComingSoonFeatures/ComingSoonFeatures';
import ComingSoonMain from './ComingSoonMain';
import './ComingSoon.scss'

const ComingSoonMit = () => {
    return (
        <div className="comingsoon-layout">
            <Header />
            <div className="comingsoon-layout-main">
                <div className="comingsoon-layout-inner">
                    <ComingSoonMain />
                    <Features />
                </div>
            </div>
        </div>
    )
}

export default ComingSoonMit;