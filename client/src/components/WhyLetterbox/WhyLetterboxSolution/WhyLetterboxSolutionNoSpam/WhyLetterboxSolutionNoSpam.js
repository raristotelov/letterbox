import { Link } from 'react-router-dom';

import './WhyLetterboxSolutionNoSpam.scss'

const WhyLetterboxSolutionNoSpam = () => {
    return (
        <div className="no-spam-solution-wrapper">
            <div className='text-box-area'>
                <h2>
                    No ads and spam in this app. Take reading and sharing to the next level with Letterbox.
                </h2>

                <Link to="/how-it-works">
                    <button className="how-it-works-btn">How it works</button>
                </Link>
            </div>
        </div>
    );
};

export default WhyLetterboxSolutionNoSpam;
