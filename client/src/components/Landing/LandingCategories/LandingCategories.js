import LandingCategoryCard from './LandingCategoryCard';
import './LandingCategories.scss';

const LandingCategories = () => {
    return (
        <section className="landing-categories">
            <LandingCategoryCard 
                categoryTitle="BUSINESS DEVELOPMENT"
                categoryText="In the simplest terms, business development can be summarized as the ideas, initiatives, and activities that help make a business better."
            />
            
            <LandingCategoryCard
                categoryTitle="DIGITAL MARKETING"
                categoryText="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
            />

            <LandingCategoryCard
                categoryTitle="TEHNOLOGIES"
                categoryText="Technologies are artifacts made through a systematic application of knowledge and used to reach practical goals."
            />
        </section>
    );
}

export default LandingCategories;