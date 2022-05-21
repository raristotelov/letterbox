import Input, { InputError } from '../../../shared/Input/Input';
import { validateField } from '../../../../services/formValidationService';
import './SignUpDateBirth.scss';

const SignUpDateBirth = ({ errState, formData, handleChange, handleValidation, setErrValues }) => {

    const checkDateErr = () => {
        if(
            !errState.dayErr &&
            !errState.monthErr &&
            !errState.yearErr &&
            formData.day &&
            formData.month &&
            formData.year
            ) {
                
            setErrValues((currentErrState) => {
                return ({
                    ...currentErrState,
                    dateErr: validateField('date', {day: formData.day, month: formData.month, year: formData.year}),
                })
            });
            
        }
    }

    return (
        <div className={errState.dateErr ? "date-of-birth date-error" : "date-of-birth"} data-content={errState.dateErr ? "Invalid date of birth!" : 'Date of birth'}>
            {
                errState.monthErr
                ?   <InputError
                        id="month"
                        type="number"
                        placeholder={errState.monthErr}
                        value={formData.month}
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}
                        />
                :   <Input
                        id="month"
                        type="number"
                        value={formData.month}
                        placeholder="Month"
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}
                        />
            }
            
            {
                errState.dayErr
                ?   <InputError
                        id="day"
                        type="number"
                        placeholder={errState.dayErr}
                        value={formData.day}
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}
                        />
                :   <Input
                        id="day"
                        type="number"
                        value={formData.day}
                        placeholder="Day"
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}
                        />
            }

            {
                errState.yearErr
                ?   <InputError
                        id="year"
                        type="number"
                        placeholder={errState.yearErr}
                        value={formData.year}
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}
                        />
                :   <Input
                        id="year"
                        type="number"
                        value={formData.year}
                        placeholder="year"
                        onChange={handleChange}
                        onBlur={(e) => {handleValidation(e); checkDateErr(e);}}/>
            }
        </div>
    )
};

export default SignUpDateBirth;