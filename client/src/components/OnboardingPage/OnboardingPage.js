import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../shared/Logo/LetterboxLogo.svg';
import GenerateMailForm from './GenerateMailForm';

import './OnboardingPage.scss';

const OnboardingPage = () => {
    return (
        <div className="page">
            <div className="onboarding-logo-conatiner">
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>

            <div className="generate-mail-container">
                <GenerateMailForm />
            </div>
        </div>
    );
}

export default OnboardingPage;
