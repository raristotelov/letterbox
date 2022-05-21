import './HappyUserCard.scss';

const HappyUserCard = ({ text, name, position, image }) => {
    return (
        <div className="happy-user-card">
            <p className="happy-user-card-text">{text}</p>

            <div className="happy-user-card-info">
                <img className="user-image" src={image} alt={name} />
                <span className="user-name">{name}</span>
                <span className="user-position">{position}</span>
            </div>
            
        </div>
    );
};

export default HappyUserCard;
