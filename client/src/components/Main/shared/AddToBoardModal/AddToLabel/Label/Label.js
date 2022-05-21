import { ReactComponent as StarDarkIcon } from '../../../../shared/assets/star-dark.svg';
import { ReactComponent as MiniLogoGreenIcon } from '../../../../shared/assets/lb-logo-mini-green.svg';
import { useEffect, useState } from 'react';

const Label = ({ user, label, addNewsletterToLabel, removeNewsletterFromLabel, newsletterId }) => {
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (label.newsletters.some(x => x._id === newsletterId)) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }, [label, newsletterId]);

    const onSubscribe = async () => {
        if (user) {
            const idToken = await user.getIdToken();

            if (subscribed) {
                await removeNewsletterFromLabel(newsletterId, label._id, idToken);
            } else {
                await addNewsletterToLabel(newsletterId, label._id, idToken);
            }
        }
    }

    return (
        <li onClick={onSubscribe}>
            <h3 className="label-title">
                <MiniLogoGreenIcon />
                {label.name}
            </h3>
            <span className="save-txt">
                {subscribed ? 'UNSAVE' : 'SAVE'}
                <StarDarkIcon />
            </span>
        </li>
    );
}

export default Label;