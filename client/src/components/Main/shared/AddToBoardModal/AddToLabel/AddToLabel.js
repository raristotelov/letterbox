import { connect } from 'react-redux';
import { addNewsletterToLabel, removeNewsletterFromLabel, getLabels } from '../../../../../actions/labelActions';
import Label from './Label';
import './AddToLabel.scss';

const AddToLabel = ({ user, search, labels, addNewsletterToLabel, removeNewsletterFromLabel, newsletterId, getLabels }) => {
    return (
        <ul className="labels">
            { !search.byName 
                ? labels && labels.map(label => (
                    <Label 
                        key={label._id}
                        label={label}
                        user={user}
                        addNewsletterToLabel={addNewsletterToLabel}
                        removeNewsletterFromLabel={removeNewsletterFromLabel}
                        newsletterId={newsletterId}
                        getLabels={getLabels}
                    />
                ))
                : labels && labels
                    .filter(label => label.name.toUpperCase().includes(search.byName.toUpperCase()))
                    .map(label => (
                        <Label
                            key={label._id}
                            label={label}
                            user={user}
                            addNewsletterToLabel={addNewsletterToLabel}
                            removeNewsletterFromLabel={removeNewsletterFromLabel}
                            newsletterId={newsletterId}
                            getLabels={getLabels}
                        />
                    ))
            }
        </ul>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    labels: state.label.labels
})

const mapDispatchToProps = {
    addNewsletterToLabel,
    removeNewsletterFromLabel,
    getLabels
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToLabel);
