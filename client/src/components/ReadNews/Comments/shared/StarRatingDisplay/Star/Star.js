import { ReactComponent as StarIcon } from '../../../../../shared/Icons/Star.svg';
import './Star.scss';

const Star = (props) => {

    return (
        <label className='star'>
            <input
                type='radio'
                name='rating'
                id={props.index}
                value={props.index}
                className='star-radio-input'
            />
            <StarIcon className= {props.gradeIndex >= props.index ? 'star-icon-active' : 'star-icon'} />
        </label>
    )
}

export default Star;