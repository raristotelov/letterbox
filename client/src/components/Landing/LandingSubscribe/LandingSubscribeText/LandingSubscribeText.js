import { Link } from 'react-router-dom';
import { ReactComponent as CheckIcon } from './assets/check-icon.svg';
import './LandingSubscribeText.scss';

const LandingSubscribeText = () => {
    return(
        <div className="landing-subscribe-text">
            <div className="landing-subscribe-text-content">
                <h2 className="landing-subscribe-text-title">Bring back the joy of reading newsletters</h2>

                <h3 className="landing-subscribe-text-subtitle">Subscribe and be ready for an amazing experience</h3>

                <ul className="landing-subscribe-text-benefits">
                    <li>
                        <span className="check-icon">
                            <CheckIcon />
                        </span>
                        Save time and read your newsletters in one place.
                    </li>
                    <li>
                        <span className="check-icon">
                            <CheckIcon />
                        </span>
                        Organize your newsletter feed according to your interests.
                    </li>
                    <li>
                        <span className="check-icon">
                            <CheckIcon />
                        </span>
                        Forget about newsletters emails and focus only in reading.
                    </li>
                </ul>

                <Link to="/subscribe">
                    <button className="subscribe-btn">Subscribe</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingSubscribeText;
