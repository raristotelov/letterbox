import AddLabelButton from './AddLabelButton/AddLabelButton';

import './MyLabelsHeader.scss';

const MyLabelsHeader = ({ setConfirmDialogueIsOpen, selected }) => {
    return (
        <div className='my-labels-header'>
            <span className={`my-labels-title ${selected ? 'selected' : ''}`}>My Labels</span>
            
            <div className='my-labels-btns'>
                <AddLabelButton setConfirmDialogueIsOpen={setConfirmDialogueIsOpen} />
            </div>
        </div>
    );
}

export default MyLabelsHeader;