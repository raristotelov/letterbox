import { useState } from 'react';
import Input from '../../shared/Input';
import { BtnFilledGray, BtnFilledGreen } from '../../shared/Buttons/BaseBtn/BaseBtn';
import { resetPassword } from '../../../services/userService';
import './ForgotPasswordForm.scss';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        if (email) {
            const res = await resetPassword(email);
            if (res === 'success') {
                setResult('A password reset link has been sent to your email.');
                setEmail('');
            } else {
                setResult('No such user.');
            }
        }
    }

    return (
        <form className="forgot-password-form" onSubmit={submitForm}>
            <div className="forgot-password-form-title">
                <h1>Reset Password</h1>
                <p>{result || 'We will send a password reset link to your email.'}</p>
            </div>

            <div className="forgot-password-input-container">
                <Input type={'email'} placeholder={'Enter your email.'}
                    onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="forgot-password-btn-container">
                {email ?
                    <BtnFilledGreen>Reset Password</BtnFilledGreen>
                    : <BtnFilledGray disabled={true}>Reset Password</BtnFilledGray>
                }
            </div>
        </form>
    );
}

export default ForgotPasswordForm;