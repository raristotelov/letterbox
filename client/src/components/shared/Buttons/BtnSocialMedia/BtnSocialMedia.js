import {ReactComponent as Facebook} from '../assets/Facebook.svg';
import {ReactComponent as Google} from '../assets/Google.svg';
import {ReactComponent as Twitter} from '../assets/Twitter.svg';
import './BtnSocialMedia.scss';

const BaseSocialButton = ({
    onClick,
    className,
    children}) => 
    <button 
        className={className}  
        onClick={onClick}
    >
        {children}
    </button>

    
export const BtnFacebook = (props) => <BaseSocialButton className="btn-facebook" {...props}><Facebook /></ BaseSocialButton>
export const BtnGoogle = (props) => <BaseSocialButton className=".btn-google" {...props}> <Google /> </BaseSocialButton> 
export const BtnTwitter = (props) => <BaseSocialButton className="btn-twitter" {...props}> <Twitter /> </BaseSocialButton> 
   