import LandingNav from './LandingNav';
import { ReactComponent as GirlWithMonitor} from './assets/girl-with-monitor.svg';
import './LandingHeader.scss'
import { Link } from 'react-router-dom';

const LandingHeader = () => {
    return (
        <header className="landing-header">
            <LandingNav />

            <div className="landing-header-content">
                <div className="describe-box">
                    <h2 className="describe-box-title">Bring back the joy of reading newsletters</h2>

                    <h3 className="describe-box-subtitle">Discover, subscribe and manage all your email newsletters in one place.</h3>
                    
                    <Link to="/sign-up">
                        <button className="try-for-free-btn">Try for free</button>
                    </Link>
                </div>

                <div className="girl-with-monitor">
                    <GirlWithMonitor />
                </div>
            </div>
        </header>
    );
};

export default LandingHeader;
