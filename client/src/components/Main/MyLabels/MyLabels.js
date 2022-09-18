import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AddLabelModal from '../shared/AddLabelModal';
import MyLabelsHeader from './MyLabelsHeader';
import Label from './Label';

import './MyLabels.scss';

const MyLabels = ({ labels, readNews, hiddenNews, selected }) => {
    const [confirmDialogueIsOpen, setConfirmDialogueIsOpen] = useState(false);
    const [currUserLabels, setCurrUserLabels] = useState(null);

    useEffect(() => {
        if (labels?.length) {
            setCurrUserLabels(labels);
        }
    }, [labels]);

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
                            newslettersCounter={label.newsletters?.length}
                            newsletters={label.newsletters}
                        />
                    ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    labels: state.label.labels
})

export default connect(mapStateToProps)(MyLabels);
