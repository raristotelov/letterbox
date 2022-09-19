import './YesNoModal.scss';

const YesNoModal = ({question, firstBtnText, secondBtnText, isOpen, yesNoMenuOpenHandler, confirmHandler}) => {
    return (
        <div className = {
            isOpen
                ?'yes-no-model open'
                :'yes-no-model'
        }>
            <div className='yes-no-modal-content'>

            <div className='yes-no-modal-box'>
                <h1 className='yes-no-modal-title'>{question}</h1>

                <div className='yes-no-modal-btns'>
                    <button className='btn cancel-btn' onClick={confirmHandler}>{firstBtnText}</button>

                    <button className='btn agree-btn'onClick={yesNoMenuOpenHandler}>{secondBtnText}</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default YesNoModal;