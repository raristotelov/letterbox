import Input, { InputError } from '../../../shared/Input/Input';
import './SignUpNames.scss';

const SignUpNames = ({ errState, formData, handleChange, handleValidation }) => {
    return (
        <div className="signup-names-input">
            {
                errState.firstNameErr
                ?   <InputError
                        id="firstName"
                        type="text"
                        placeholder={errState.firstNameErr}
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleValidation}
                        />
                :   <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        placeholder="First
                        name"
                        onChange={handleChange}
                        onBlur={handleValidation}
                        />
            }

            {
                errState.lastNameErr
                ?   <InputError
                        id="lastName"
                        type="text"
                        placeholder={errState.lastNameErr}
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleValidation}/>
                :   <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        placeholder="Last name"
                        onChange={handleChange}
                        onBlur={handleValidation}/>
            }
        </div>
    )
};

export default SignUpNames;