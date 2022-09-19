import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../../actions/userActions';
import { BtnFacebook, BtnGoogle, BtnTwitter } from '../../shared/Buttons/BtnSocialMedia/BtnSocialMedia';

import './SocialMediaSignIn.scss';

const SocialMediaSignIn = ({ signInWithGoogle, signInWithFacebook, signInWithTwitter }) => {
    const history = useHistory();

    const handleGoogle = async () => {
        await signInWithGoogle(history);
    }

    const handleFacebook = async () => {
        await signInWithFacebook(history);
    }

    const handleTwitter = async () => {
        await signInWithTwitter(history);
    }

    return (
        <section className="social-media-signin">
            <p>or use account</p>
            
            <BtnTwitter className="btn-twitter" onClick={handleTwitter} />

            <BtnFacebook className="btn-facebook" onClick={handleFacebook} />

            <BtnGoogle className="btn-google" onClick={handleGoogle} />
        </section>
    )
}


const mapDispatchToProps = {
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter
}   

export default connect(null, mapDispatchToProps)(SocialMediaSignIn);
