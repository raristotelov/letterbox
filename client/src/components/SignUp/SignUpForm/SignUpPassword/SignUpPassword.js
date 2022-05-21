import Input, { InputError } from '../../../shared/Input/Input';
import './SignUpPassword.scss';

const SignUpPassword = ({ errState, formData, handleChange, handleValidation }) => {
    return (
        <div className="signup-password">
            {
                errState.passwordErr
                ?   <InputError
                        id="password"
                        type="password"
                        placeholder={errState.passwordErr}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleValidation}/>
                :   <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleValidation}/>
            }
        </div>
    )
};

export default SignUpPassword;