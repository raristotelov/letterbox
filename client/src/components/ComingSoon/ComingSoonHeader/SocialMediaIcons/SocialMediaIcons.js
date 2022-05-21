import {ReactComponent as Facebook } from '../assets/Facebook.svg';
import {ReactComponent as Instagram } from '../assets/Instagram.svg';
import {ReactComponent as LinkedIn } from '../assets/Linkedin.svg';
import {ReactComponent as Twitter } from '../assets/Twitter.svg';

import './SocialMediaIcons.scss'

const SocialMediaIcons = () => {
    return (
        <div className='social-medias'>
            <a href='https://www.facebook.com/' className='icon' target="_blank" rel="noreferrer">
                <Facebook />
            </a>
            <a href='https://www.instagram.com/' className='icon' target="_blank" rel="noreferrer">
                <Instagram  />
            </a>
            <a href='https://www.linkedin.com/' className='icon' target="_blank" rel="noreferrer">
                <LinkedIn />
            </a>
            <a href='https://twitter.com/' className='icon' target="_blank" rel="noreferrer">
                <Twitter />
            </a>
        </div>
    )
}

export default SocialMediaIcons;