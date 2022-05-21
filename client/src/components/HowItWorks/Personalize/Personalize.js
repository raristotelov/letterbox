import { Link } from 'react-router-dom';
import { ReactComponent as PersonalizeImage } from './assets/PersonalizeImage.svg';
import './Personalize.scss';

const Personalize = () => {
    return (
        <div className="personalize-container">
            <section className="content-container">
                <h3 className="title">Personalize your Newsletter-App!</h3>

                <p className="description">
                    We should understand if you prefer to rename some categories, add folders and label them.
                    Add new relevant content quick and easy and paste a particular link.
                    <br></br>
                    <br></br>
                    Don’t forget the search bar, as well.
                </p>

                <Link to="/signup">
                    <button className="try-btn">
                        TRY FOR FREE
                    </button>
                </Link>
            </section>

            <PersonalizeImage />
        </div>
    );
}

export default Personalize;