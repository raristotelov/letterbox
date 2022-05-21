import Star from './Star';
import './StarRatingDisplay.scss';

const StarRatingDisplay = ({ gradeIndex }) => {
    const GRADES = [1, 2, 3, 4, 5];
    return (
        <div className='star-rating-container'>
            <div className='stars'>
                {
                    GRADES.map((grade) => (
                        <Star 
                            index={grade}
                            key={grade}
                            gradeIndex = {gradeIndex}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default StarRatingDisplay;