import { ReactComponent as FooterLogo } from './assets/footer-logo.svg';
import { Link } from 'react-router-dom';
import './FooterSubFooter.scss';

const FooterSubFooter = () => {
    return(
        <div className="footer-subfooter">
            <div className="footer-subfooter-links">
                <Link to="/privacypolicy">Privacy Policy</Link>
                <Link to="/personalinformation">Personal Information</Link>
                <Link to="/termofservice">Terms of Service</Link>
            </div>
            
            <div className="subfooter-logo-wrapper">
                <span className="subfooter-year">2021</span>
                <div className="subfooter-logo">
                    <FooterLogo />
                </div>
            </div>
        </div>
    );
}

export default FooterSubFooter;