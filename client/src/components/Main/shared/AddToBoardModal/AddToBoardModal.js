import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import Input, { InputError } from '../../../shared/Input/Input';
import { ReactComponent as AddIcon } from '../../shared/assets/add.svg';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import AddToLabel from './AddToLabel';
import './AddToBoardModal.scss';

const AddToBoardModal = ({ isOpen, onCloseClick, setCreateLabelOpen }) => {
    const [search, setSearch] = useState(false);

    const handleOnChange = (e) => {
        setSearch({ byName: e.target.value });
    }

    return (
        <div id="attach_to_board_modal" className={
            isOpen
                ? 'attach-to-board-modal openModal'
                : 'attach-to-board-modal'}
        >

            <div id="modal_content" className="modal-content">
                <div className="attach-to-board-box">
                    <div className="attach-to-board-header">
                        <button className="close-btn" onClick={onCloseClick}><CloseIcon /></button>

                        <h3 className="attach-to-board-title">Add to board</h3>

                        <div className="attach-to-board-search">
                            <Input
                                id="labelTitle"
                                type="text"
                                placeholder="Find board"
                                onChange={handleOnChange}
                            />
                        </div>

                    </div>

                    <div className="attach-to-board-content">
                        <AddToLabel
                            newsletterId={isOpen}
                            search={search}
                        />
                    </div>

                    <button className="attach-to-board-add-btn" onClick={() => setCreateLabelOpen(true)}>

                        <span className="add-btn-txt">Create label</span>
                        <span className="add-btn-icon"><AddIcon /></span>

                    </button>

                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    labels: state.label.labels
})

export default connect(mapStateToProps, null)(AddToBoardModal);