import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLabels } from '../../../actions/labelActions';
import AddLabelModal from '../shared/AddLabelModal';
import MyLabelsHeader from './MyLabelsHeader';
import Label from './Label';
import './MyLabels.scss';

const MyLabels = ({ user, labels, getLabels }) => {
    const [confirmDialogueIsOpen, setConfirmDialogueIsOpen] = useState(false);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(getLabels)
                .catch(console.log);
        }
    }, [user, getLabels]);

    const confirmDialogueCloseClick = () => {
        setConfirmDialogueIsOpen(!confirmDialogueIsOpen);
    }

    return (
        <div className="my-labels-wrapper">
            <AddLabelModal
                isOpen={confirmDialogueIsOpen}
                onCloseClick={confirmDialogueCloseClick} />

            <MyLabelsHeader setConfirmDialogueIsOpen={setConfirmDialogueIsOpen} />

            {
                labels && labels
                    .map((label, index) =>
                    (
                        <Label
                            key={index}
                            labelTitle={label.name}
                            newsCounter={label.newsCounter}
                            newsletters={label.newsletters} />
                    )
                    )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    labels: state.label.labels
})

const mapDispatchToProps = {
    getLabels
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLabels);
