import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks'; 
import SignUpForm from './SignUpForm';
import SocialMediaSignUp from './SocialMediaSignUp';
import { ReactComponent as LogoGreen } from '../shared/Logo/LogoGreen.svg';
import SignAside from '../shared/SignAside';
import './SignUp.scss';

const SignUp = () => {
    let history = useHistory();

    const RedirectToSignIn = () => {
        history.push('signin');
    }

    const [countriesState] = useFetch(
        'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
        {
            'method': 'GET',
            'headers': {
                'x-rapidapi-key': 'cfae0a60dcmsh9c04c24b2e05c4bp17dbd8jsna8830832a096',
                'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
            }
        });

    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='signup-main'>
                    <div className='signup-logo-green'>
                        <LogoGreen />
                    </div>
                    <div className="form-wrapper">
                        <SignUpForm countries={countriesState} className='signup-form' />
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