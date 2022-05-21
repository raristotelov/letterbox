import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BtnFacebook, BtnGoogle, BtnTwitter } from '../../shared/Buttons/BtnSocialMedia/BtnSocialMedia';
import { signInWithGoogle, signInWithFacebook } from '../../../actions/userActions';
import './SocialMediaSignUp.scss';

const SocialMediaSignUp = ({ signInWithGoogle, signInWithFacebook }) => {
    const history = useHistory();

    const handleGoogle = async () => {
        await signInWithGoogle(history);
    }

    const handleFacebook = async () => {
        await signInWithFacebook(history);
    }

    return (
        <section className="social-media-signup">
            <p>or use account</p>
            <BtnTwitter className="btn-twitter" />
            <BtnFacebook className="btn-facebook" onClick={handleFacebook} />
            <BtnGoogle className="btn-google" onClick={handleGoogle} />

        </section>
    )
}

const mapDispatchToProps = {
    signInWithGoogle,
    signInWithFacebook,
}   

export default connect(null, mapDispatchToProps)(SocialMediaSignUp);
