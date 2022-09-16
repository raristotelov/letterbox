import { ReactComponent as FooterLogo } from './assets/footer-logo.svg';

import './FooterSubFooter.scss';

const FooterSubFooter = () => {
    return(
        <div className="footer-subfooter">
            {/* <div className="footer-subfooter-links">
                <span>Privacy Policy</span>

                <span>Personal Information</span>

                <span>Terms of Service</span>
            </div> */}
            
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