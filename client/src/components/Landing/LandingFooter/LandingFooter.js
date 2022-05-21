import FooterHeader from './FooterHeader';
import FooterSubFooter from './FooterSubFooter';
import './LandingFooter.scss';

const LandingFooter = () => {
    return(
        <footer className="landing-footer">
            <div className="landing-footer-content">
                <FooterHeader />
                <FooterSubFooter />
            </div>
        </footer>
    );
}

export default LandingFooter;