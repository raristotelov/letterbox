import './ComingSoonHeader.scss'
import SocialMediaIcons from './SocialMediaIcons'
import { ReactComponent as NewsletterAppLogo } from '../../shared/Logo/LogoGreen.svg'
const Header = () => {

    return (
        <div className='comingsoon-header-shadow'>
            <div className='comingsoon-header'>
                <NewsletterAppLogo className="comingsoon-header-newsletterapp-logo"/>
                <SocialMediaIcons />
            </div>

        </div>
    )
}

export default Header;