import WhyLetterboxSolutionHeader from './WhyLetterboxSolutionHeader';
import WhyLetterboxSolutionFeatures from './WhyLetterboxSolutionFeatures';
import WhyLetterboxSolutionNoSpam from './WhyLetterboxSolutionNoSpam/WhyLetterboxSolutionNoSpam';

import './WhyLetterboxSolution.scss';

const WhyLetterboxSolution = () => {
    return (
        <div className='why-letterbox-solution-wrapper'>
            <WhyLetterboxSolutionHeader />

            <WhyLetterboxSolutionFeatures />

            <WhyLetterboxSolutionNoSpam />
        </div>
    );
};

export default WhyLetterboxSolution;
