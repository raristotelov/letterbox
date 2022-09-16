import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../shared/Logo/LetterboxLogo.svg';

import './LandingNav.scss';

const LandingNav = () => {
    return (
        <nav className="landing-nav">
            <div className="landing-logo">
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>

            <ul className="nav-links">
                <li className='page-link'>
                    <Link to="/how-it-works">How it works</Link>
                </li>

                <li className='page-link'>
                    <Link to="/why-letterbox">Why Letterbox?</Link>
                </li>

                <li>
                    <Link to="/sign-in">
                        <button className="login-btn">Login</button>
                    </Link>
                </li>
            </ul >
        </nav>
    );
};

export default LandingNav;
