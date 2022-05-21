import { ReactComponent as Logo } from '../shared/Logo/LogoGreen.svg';
import GenerateMailForm from './GenerateMailForm';

import './OnboardingPage.scss';

const OnboardingPage = () => {
    return (
        <div className="page">
            <div className="onboarding-logo-conatiner">
                <Logo />
            </div>

            <div className="generate-mail-container">
                <GenerateMailForm />
            </div>
        </div>
    );
}

export default OnboardingPage;
