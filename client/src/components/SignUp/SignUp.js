import {useState} from "react";
import { useHistory, Link } from 'react-router-dom';

import { useFetch } from '../../hooks'; 
import SignUpForm from './SignUpForm';
import SocialMediaSignUp from './SocialMediaSignUp';
import { ReactComponent as Logo } from '../shared/Logo/LetterboxLogo.svg';
import SignAside from '../shared/SignAside';

import './SignUp.scss';

const SignUp = () => {
    const [countryOptions, setCountryOptions] = useState(null);

    const countriesState = useFetch('https://restcountries.com/v3.1/all', {});

    if (!countryOptions && countriesState?.length) {
        setCountryOptions(countriesState.map((country) => country.name.common).sort((a, b) => a.localeCompare(b)));
    }

    let history = useHistory();

    const RedirectToSignIn = () => {
        history.push('/sign-in');
    }

    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='signup-main'>
                    <div className='signup-logo-green'>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>

                    <div className="form-wrapper">
                        <SignUpForm 
                            countries={countryOptions?.length ? countryOptions : []}
                            className='signup-form'
                        />

                        <SocialMediaSignUp className="social-media-signup"/>
                    </div>
                </div>

                <SignAside 
                    className='sign-aside' 
                    title="Wellcome back!" 
                    firstRowText="To keep connected with us" 
                    secondRowText="please sign in" 
                    btnText="sign in"
                    onClick={RedirectToSignIn} />
            </div>
        </div>
    )
};

export default SignUp;