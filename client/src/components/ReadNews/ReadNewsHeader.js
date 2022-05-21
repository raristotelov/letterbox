import { useHistory } from 'react-router';
import { BtnOutlineGreen } from '../shared/Buttons/BaseBtn/BaseBtn';
import { ReactComponent as LeftArrow } from '../shared/Icons/LeftArrow.svg';
import './ReadNewsHeader.scss';

const ReadNewsHeader = ({newsletterName, yesNoMenuOpenHandler}) => {
    const history = useHistory();
    const backToFeeds = () => {
        history.push('/explore-feeds');
    }
    return (
        <header className='read-header'>
            <div className='read-header-back' onClick={backToFeeds}><LeftArrow /><span className='read-header-back-text'>Back to feeds</span></div>
            <div className='read-header-title'><span className='newsletter-circle-logo'>{newsletterName.substring(0,3)}</span> {newsletterName} </div>
            <BtnOutlineGreen onClick={yesNoMenuOpenHandler}>Unsubscribe</BtnOutlineGreen>
        </header>
    )
}

export default ReadNewsHeader;