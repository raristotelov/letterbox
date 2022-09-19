import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LandingNav from '../Landing/LandingHeader/LandingNav';
import WhyLetterboxEntry from './WhyLetterboxEntry';
import LandingFeatures from './LandingFeatures';
import WhyLetterboxSolution from './WhyLetterboxSolution';
import LearnToRead from './LearnToRead';
import LandingSubscribe from './LandingSubscribe';
import LandingFooter from './LandingFooter';

import './WhyLetterbox.scss'

const WhyLetterbox = ({ user }) => {
    let history = useHistory();

    if (user) {
        history.push('/explore-feeds');
    }

    return (
        <div className="why-letterbox-wrapper">
            <div className="why-letterbox">
                <LandingNav />

                <WhyLetterboxEntry />

                <LandingFeatures />

                <WhyLetterboxSolution />

                <LearnToRead />

                <LandingSubscribe />

                <LandingFooter />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(WhyLetterbox);
