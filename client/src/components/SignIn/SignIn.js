import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SignInForm from './SignInForm';
import SignAside from '../shared/SignAside';
import { ReactComponent as Logo } from '../shared/Logo/LetterboxLogo.svg';
import SocialMediaSignIn from './SocialMediaSignIn/SocialMediaSignIn';

import './SignIn.scss';

const SignIn = () => {
    let history = useHistory();

    const RedirectToSignUp = () => {
        history.push('sign-up');
    }

    return (
        <div className='signin'>
            <div className='signin-container'>
                <div className='signin-main'>
                    <div className='signin-logo'>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    
                    <div>
                        <SignInForm className='signin-form' />

                        <SocialMediaSignIn className="social-media-signin"/>
                    </div>
                </div>
                
                <SignAside 
                    className='sign-aside' 
                    title="Hello, Friend!" 
                    firstRowText="Enter your personal details" 
                    secondRowText="and strart journey with us" 
                    btnText="sign up"
                    onClick={RedirectToSignUp} />
            </div>
        </div>
    )
};

export default SignIn;