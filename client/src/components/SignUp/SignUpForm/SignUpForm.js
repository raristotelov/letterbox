import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, signIn } from '../../../actions/userActions';

import { validateField } from '../../../services/formValidationService';
import SignUpEmail from './SignUpEmail/SignUpEmail';
import SignUpPassword from './SignUpPassword/SignUpPassword';
import SignUpNames from './SignUpNames/SignUpNames';
import SignUpDateBirth from './SignUpDateBirth/SignUpDateBirth';
import SignUpCountry from './SignUpCountry/SignUpCountry';
import SignUpButton from './SignUpButton/SignUpButton';
import './SignUpForm.scss';


const SignUpForm = ({ countries, signUp, signIn }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        year: null,
        month: null,
        day: null,
        country: null
    });

    const [errState, setErrValues] = useState({
        emailErr: false,
        passwordErr: false,
        firstNameErr: false,
        lastNameErr: false,
        dayErr: false,
        monthErr: false,
        yearErr: false,
        dateErr: false,
        countryErr: false,
    });

    const [signUpErr, setSignUpErr] = useState(false);

    const existError = useCallback((currentErrState) => {
        for (let prop in currentErrState) {
            if(errState[prop] !== false && prop !== 'signUpErr') {
                return true;
            }
        }

        return false;
    }, [errState])

    useEffect(() => {
        setSignUpErr(existError(errState));
    }, [existError, errState]);

    const clearErrState = (err) => {
        setErrValues((currentErrState) => ({
            ...currentErrState,
            [err]: false
        }));
    }


    const handleValidation = (e) => {
        if(!e.target.value) {
            clearErrState(e.target.name + 'Err');
            return;
        }

        setErrValues((currentErrState) => {
            
            return ({
                ...currentErrState,
                [e.target.name + 'Err']: validateField(e.target.name, e.target.value),
            })
        });
    }

    const handleChange = (e) => {
            
        setFormData((currentErrState) => ({
            ...currentErrState,
            [e.target.name]: e.target.value
        }));
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if (formData.email && formData.password && formData.firstName
            && formData.lastName && formData.year && formData.month
            && formData.day && formData.country) {
                try {
                    await signUp(formData);
                    await signIn(formData.email, formData.password);

                    history.push('/onboarding');   
                } catch (res) {
                     alert(res.error);
                }      
        }
    }

    return (
        <form className='signup-form' onSubmit={submitForm}>
            
            <h1 className="signup-header">Create Account</h1>

            <SignUpEmail errState={errState} formData={formData} handleChange={handleChange} handleValidation={handleValidation}/>

            <SignUpPassword errState={errState} formData={formData} handleChange={handleChange} handleValidation={handleValidation}/>
            
            <SignUpNames errState={errState} formData={formData} handleChange={handleChange} handleValidation={handleValidation}/>

            <SignUpDateBirth errState={errState} formData={formData} handleChange={handleChange} handleValidation={handleValidation} setErrValues={setErrValues}/>

            <SignUpCountry errState={errState} formData={formData} handleChange={handleChange} handleValidation={handleValidation} setErrValues={setErrValues} countries={countries}/>
            
            <SignUpButton formData={formData} signUpErr={signUpErr}/>

            <span className="policy-agreement-txt">
                By clicking Create account, I agree that I have read and
                <span className="second-line">accepted the <a href="/termsofuse">Terms of Use</a> and <a href="/privacypolicy">Privacy Policy</a>.</span>
            </span>
        </form>
    )
}

const mapDispatchToProps = {
    signUp,
    signIn,
}   

export default connect(null, mapDispatchToProps)(SignUpForm);
