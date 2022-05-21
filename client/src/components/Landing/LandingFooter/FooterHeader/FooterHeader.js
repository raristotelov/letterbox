import { Link } from 'react-router-dom';
import './FooterHeader.scss';

const FooterHeader = () => {
    return(
        <div className="footer-header">
            <div className="links-columns-wrapper">
                <div className="links-column">
                    <span className="links-column-title">Get started</span>
                    <Link to="/blog">Blog</Link>
                    <Link to="/sitemap">Site Map</Link>
                    <Link to="/faq">F.A.Q.</Link>
                </div>

                <div className="links-column">
                    <span className="links-column-title">Pricing</span>
                    <Link to="/silver">Silver</Link>
                    <Link to="/bronze">Bronze</Link>
                    <Link to="/gold">Gold</Link>
                </div>

                <div className="links-column">
                    <span className="links-column-title">Follow</span>
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </div>
    );
}

export default FooterHeader;