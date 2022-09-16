import { Link } from 'react-router-dom';

import ForgotPasswordForm from './ForgotPasswordForm';
import { ReactComponent as Logo } from '../shared/Logo/LetterboxLogo.svg';

import './ForgotPassword.scss';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-page">
            <div className="forgot-password-logo-container">
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>

            <div className="forgot-password-form-container">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}

export default ForgotPassword;