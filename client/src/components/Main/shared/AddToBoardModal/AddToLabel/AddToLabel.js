import { connect } from 'react-redux';
import { addNewsletterToLabel, removeNewsletterFromLabel } from '../../../../../actions/labelActions';
import Label from './Label';
import './AddToLabel.scss';

const AddToLabel = ({ user, search, labels, addNewsletterToLabel, removeNewsletterFromLabel, newsletterId }) => {
    return (
        <ul className="labels">
            { !search.byName 

                ? labels && labels.map(label => (
                    <Label key={label._id}
                        label={label}
                        user={user}
                        addNewsletterToLabel={addNewsletterToLabel}
                        removeNewsletterFromLabel={removeNewsletterFromLabel}
                        newsletterId={newsletterId} />
                ))
                : labels && labels
                    .filter(label => label.name.includes(search.byName))
                    .map(label => (
                        <Label key={label._id}
                            label={label}
                            user={user}
                            addNewsletterToLabel={addNewsletterToLabel}
                            removeNewsletterFromLabel={removeNewsletterFromLabel}
                            newsletterId={newsletterId} />
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
    removeNewsletterFromLabel
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToLabel);
