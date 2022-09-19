import { ReactComponent as CommunityImage } from './assets/Community.svg';
import './Comunity.scss';

const Community = () => {
    return (
        <div className="community-container">
            <h2 className="title">Be part of Letterbox community!</h2>

            <section className="content-container">
                <CommunityImage />

                <section className="description-container">
                    <h6 className="description-title">Meet the experts!</h6>

                    <p className="description">
                        Don’t miss the chance to chat with top experts, bloggers and digital ninjas.
                        <br></br>
                        <br></br>
                        Invite all your friends and colleagues to join us and enjoy this unique experience.
                        <br></br>
                        <br></br>
                        Be a valuable member of our Letterbox community.
                    </p>
                </section>
            </section>


        </div>
    );
}

export default Community;