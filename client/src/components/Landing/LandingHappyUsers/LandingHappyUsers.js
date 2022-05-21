import HappyUserCard from './HappyUserCard';
import UserProfileImage from './assets/user-profile-pic.png';
import './LandingHappyUsers.scss';

const LandingHappyUsers = () => {
    return (
        <section className="landing-happy-users">

            <div className="happy-users-header">
                <div className="happy-users-header-content">
                    <h2 className="happy-users-header-title">Enjoy reading newsletters</h2>
                    <p className="happy-users-header-txt">Read valuable, high-quality content based on your intest and expertise</p>
                </div>
            </div>

            <div className="happy-users-content">
                <h2 className="happy-users-content-title">Join 1000+ Happy Premium Users</h2>

                <div className="happy-users-content-wrapper">
                    <HappyUserCard
                        text="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
                        name="Savannah Miles"
                        position="brand manager"
                        image={UserProfileImage}
                        />
                    <HappyUserCard
                        text="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
                        name="Savannah Miles"
                        position="brand manager"
                        image={UserProfileImage}
                        />
                    <HappyUserCard
                        text="Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
                        name="Savannah Miles"
                        position="brand manager"
                        image={UserProfileImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default LandingHappyUsers;
