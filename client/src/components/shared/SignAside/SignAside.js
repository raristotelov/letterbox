import { BtnOutline } from '../Buttons/BaseBtn/BaseBtn';
import './SignAside.scss';

const SignAside = ( {title, firstRowText, secondRowText, btnText, onClick} ) => {
    return (
        <aside className='sign-aside'>
            <div className='sign-aside-wrapper'>
                <h1>{title}</h1>
                <p><span>{firstRowText}</span> {secondRowText}</p>
                <BtnOutline onClick={onClick} className='sign-btn-outline'>{btnText}</BtnOutline>
            </div>
        </aside>
    )
}

export default SignAside;