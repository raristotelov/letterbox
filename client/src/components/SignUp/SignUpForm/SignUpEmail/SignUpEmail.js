import Input, { InputError } from '../../../shared/Input/Input';

import './SignUpEmail.scss';

const SignUpEmail = ({ errState, formData, handleChange, handleValidation }) => {
    return (
        <div className="signup-email">
            {
                errState.emailErr
                ?   <InputError
                        id="email"
                        type="email"
                        placeholder={errState.emailErr}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleValidation}
                        />
                :   <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        onBlur={handleValidation}
                        />
            }
        </div>
    )
};

export default SignUpEmail;