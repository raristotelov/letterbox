import CategoryLogo from './assets/category-logo.png';
import './LandingCategoryCard.scss';

const LandingCategoryCard = ({ categoryTitle, categoryText }) => {
    return (
        <div className="landing-category-card">
            <h2 className="category-title">{categoryTitle}</h2>
            <img className="category-logo" src={CategoryLogo} alt="Category Logo"/>
            <p className="category-description">{categoryText}</p>
        </div>
    );
}

export default LandingCategoryCard;