import { useEffect, useState } from 'react';
import Star from './Star';
import './StarRating.scss';

const StarRating = ({ starRatingHandler, incomingGrade=0 }) => {
    useEffect(() => {
        setGradeIndex(incomingGrade)
    }, [incomingGrade, starRatingHandler])
    const [gradeIndex, setGradeIndex] = useState(null);
    const GRADES = [1, 2, 3, 4, 5];
    return (
        <div className='star-rating-container'>
            <div className='stars'>
                {
                    GRADES.map((grade) => (
                        <Star 
                            index={grade}
                            key={grade}
                            setGradeIndex = {setGradeIndex}
                            gradeIndex = {gradeIndex}
                            starRatingHandler = {starRatingHandler}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default StarRating;