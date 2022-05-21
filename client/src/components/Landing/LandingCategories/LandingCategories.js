import LandingCategoryCard from './LandingCategoryCard';
import './LandingCategories.scss';

const LandingCategories = () => {
    return (
        <section className="landing-categories">
            <LandingCategoryCard 
                categoryTitle="BUSINESS DEVELOPMENT"
                categoryText="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet."
                />
            <LandingCategoryCard
                categoryTitle="DIGITAL MARKETING"
                categoryText="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet."
                />
            <LandingCategoryCard
                categoryTitle="TEHNOLOGIES"
                categoryText="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet."
                />
        </section>
    );
}

export default LandingCategories;