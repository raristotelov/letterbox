import { useHistory } from 'react-router-dom';

import { useFetch } from '../../hooks'; 
import SignUpForm from './SignUpForm';
import SocialMediaSignUp from './SocialMediaSignUp';
import { ReactComponent as Logo } from '../shared/Logo/LetterboxLogo.svg';
import SignAside from '../shared/SignAside';

import './SignUp.scss';

const SignUp = () => {
let history = useHistory();

    const RedirectToSignIn = () => {
        history.push('signin');
    }

    const countriesState = useFetch('https://restcountries.com/v3.1/all', {});

    const countriesOptions = countriesState.map((country) => country.name.common);

    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='signup-main'>
                    <div className='signup-logo-green'>
                        <Logo />
                    </div>
                    <div className="form-wrapper">
                        <SignUpForm countries={countriesOptions} className='signup-form' />
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