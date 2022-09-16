import React, { Fragment } from "react";

import Input, { InputError } from '../../../shared/Input/Input';

import './SignUpCountry.scss';

const SignUpCountry = ({ errState, formData, handleChange, handleValidation, countries }) => {
    return (
        <Fragment>
            {
                errState.countryErr
                ?   <div className="sign-select-error">
                        <InputError 
                            id='country'
                            type='text'
                            value={formData.country}
                            placeholder={errState.countryErr}
                            onChange={handleChange}
                            onBlur={(e) => handleValidation(e, countries)}
                            isSelect={true}
                            selectOptions={countries}
                            listId='countries'
                        />
                    </div>
                :   <div className="country">
                        <Input
                            id='country'
                            type='text'
                            value={formData.country}
                            placeholder={'Country/Region'}
                            onChange={handleChange}
                            onBlur={(e) => handleValidation(e, countries)}
                            isSelect={true}
                            selectOptions={countries}
                            listId='countries'
                        />
                    </div>
            }
        </Fragment>
    )
};

export default SignUpCountry;