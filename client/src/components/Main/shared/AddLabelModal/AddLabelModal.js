import { connect } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';
import Input, { InputError } from '../../../shared/Input/Input';
import { addLabel } from '../../../../actions/labelActions';
import './AddLabelModal.scss';

const AddLabelModal = ({ isOpen, onCloseClick, user, addLabel }) => {

    const [labelName, setLabelName] = useState('');

    const [errState, setErrValues] = useState({
        labelTitleErr: false,
    });

    const handleValidation = (e) => {
        setErrValues((currentErrState) => {

            return ({
                ...currentErrState,
                [e.target.name + 'Err']: e.target.value === '' ? 'Empty field!' : false,
            })
        });
    }

    const handleChange = (e) => {
        setLabelName(e.target.value);
    }

    const submitForm = async e => {
        e.preventDefault();

        if (errState.labelTitleErr) return;

        if (labelName && labelName !== '' && user) {
            const idToken = await user.getIdToken(true);
            addLabel(labelName, idToken);
            onCloseClick();
            setLabelName('');
        }
    }

    return (
        <div className={
            isOpen
                ? 'add-label-modal open'
                : 'add-label-modal'}>

            <div className="add-label-modal-content">
                <form className="add-label-box" onSubmit={submitForm}>
                    <div className="add-label-header">
                        <button className="add-label-close-btn" type="button" onClick={onCloseClick}>
                            <CloseIcon />
                        </button>
                        <h3 className="add-label-title">New Label</h3>
                        {
                            errState.labelTitleErr
                                ? <InputError
                                    type="text"
                                    value={labelName}
                                    placeholder={errState.labelTitleErr}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                />
                                : <Input
                                    type="text"
                                    value={labelName}
                                    placeholder="Name your label"
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                />
                        }
                    </div>

                    <button className="add-label-save-btn">
                        <span className="save-btn-txt">Save</span>
                        <span className="save-btn-icon"><SaveIcon /></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    addLabel
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLabelModal);