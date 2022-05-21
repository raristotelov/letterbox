import { ReactComponent as PlusIcon } from './assets/plus-icon.svg';
import './AddLabelButton.scss';

const AddLabelButton = ({ setConfirmDialogueIsOpen }) => {
    const handleOnclick = (e) => {
        if(e.currentTarget.id === 'add_label_btn') {
            setConfirmDialogueIsOpen(true);
        }
    }

    return (
        <button id="add_label_btn" className="add-label-btn" onClick={handleOnclick}>
            <PlusIcon />
        </button>
    );
}

export default AddLabelButton;