import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getLabels } from '../../../actions/labelActions';
import AddLabelModal from '../shared/AddLabelModal';
import MyLabelsHeader from './MyLabelsHeader';
import Label from './Label';

import './MyLabels.scss';

const MyLabels = ({ user, labels, getLabels, selected }) => {
    const [confirmDialogueIsOpen, setConfirmDialogueIsOpen] = useState(false);
    const [currUserLabels, setCurrUserLabels] = useState(null);

    useEffect(() => {
        if (user && !currUserLabels) {
            user.getIdToken()
                .then(getLabels)
                .catch(console.log);
        }
    }, [user, getLabels, currUserLabels]);

    useEffect(() => {
        if (labels?.length && !currUserLabels) {
            setCurrUserLabels(labels);
        }
    }, [labels, currUserLabels]);

    const confirmDialogueCloseClick = () => {
        setConfirmDialogueIsOpen(!confirmDialogueIsOpen);
    }

    return (
        <div className="my-labels-wrapper">
            <AddLabelModal
                isOpen={confirmDialogueIsOpen}
                onCloseClick={confirmDialogueCloseClick}
            />

            <MyLabelsHeader 
                setConfirmDialogueIsOpen={setConfirmDialogueIsOpen}
                selected={selected}
            />

            {currUserLabels && currUserLabels
                    .map((label, index) =>
                    (
                        <Label
                            key={index}
                            labelTitle={label.name}
                            newsCounter={label.newsCounter}
                            newsletters={label.newsletters}
                        />
                    ))
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
