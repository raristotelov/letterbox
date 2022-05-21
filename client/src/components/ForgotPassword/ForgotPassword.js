import { ReactComponent as Logo } from '../shared/Logo/LogoGreen.svg';
import './ForgotPassword.scss';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-page">
            <div className="forgot-password-logo-container">
                <Logo />
            </div>

            <div className="forgot-password-form-container">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}

export default ForgotPassword;