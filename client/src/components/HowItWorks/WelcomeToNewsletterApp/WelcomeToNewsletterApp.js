import { Link } from 'react-router-dom';
import { ReactComponent as WelcomeImage } from './assets/welcome.svg';
import './WelcomeToNewsletterApp.scss';

const WelcomeToNewsletterApp = () => {
    return (
        <div className="welcome-to-newsletterapp-container">
            <section className="description-container">
                <h3 className="title">Welcome to Newsletter-App!</h3>
                <p className="description">
                    That is how your screen looks like after signing up!
                    <br></br>
                    Now it is time to choose your predefined feeds based on preferences and interests.
                    <br></br>
                    Learn from the experts all about business and finances, marketing and technology.
                </p>

                <Link to="/signin">
                    <button className="login-btn">Login</button>
                </Link>
            </section>

            <section className="img-container">
                <WelcomeImage />
            </section>
        </div>
    );
}

export default WelcomeToNewsletterApp;