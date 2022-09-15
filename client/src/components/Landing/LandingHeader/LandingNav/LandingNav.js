import { ReactComponent as Logo } from '../../../shared/Logo/LetterboxLogo.svg';
import { Link } from 'react-router-dom';
import './LandingNav.scss';

const LandingNav = () => {
    return (
        <nav className="landing-nav">
            <div className="landing-logo">
                <Logo />
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/howitworks">How it works</Link>
                </li>
                <li>
                    <Link to="/whynewsletterapp">Why Newsletter-App?</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/signin">
                        <button className="login-btn">Login</button>
                    </Link>
                </li>
            </ul >
        </nav>
    );
};

export default LandingNav;
