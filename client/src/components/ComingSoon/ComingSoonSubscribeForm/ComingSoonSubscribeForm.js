import { useState, useContext } from 'react'
import { useForm } from '../../../hooks';
import { useHistory } from 'react-router-dom';
import { subscribe } from '../../../services/userService';
import ComingSoonContext from '../../../contexts/ComingSoonContext';
import InputText from './ComingSoonInput';
import SubscribeBtn from './ComingSoonSubscribeBtn';
import './ComingSoonSubscribeForm.scss'

const SubscribeForm = () => {
    const history = useHistory();
    const [state, setValues] = useForm({email:''});
    const [emailError, setEmailErrorState] = useState(false);

    const [subscribedState, setSubscribedState] = useContext(ComingSoonContext);

    const emailValidation = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!state.email.match(pattern)) {
            setEmailErrorState({
                emailError: true
            });
        } else if (emailError) {
            setEmailErrorState(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (emailError || state.email === '') {
            return;
        }
        if (state.email) {
            subscribe(state.email)
                .then(() => {
                    setSubscribedState({
                        ...subscribedState,
                        email: state.email
                    });
                    history.push('/');
                })
                .catch(err => {
                    setSubscribedState({
                        ...subscribedState,
                        email: null
                    });
                    history.push('/');
                })
        }
    }

    return (
        <div className="subscribe">
            <h2 className="subscribe-message">Discover, subscribe and manage email newsletters in one place.</h2>
            <form className="subscribe-form" onSubmit={handleSubmit}>
                <InputText id="email" error={emailError} errorMessage="Invalid email" 
                    placeholder="Email Address" value={state.email} 
                    onBlur={emailValidation} onChange={setValues} />
                <SubscribeBtn className="text-button">Subscribe</ SubscribeBtn>
            </form>
        </div>
    );
}

export default SubscribeForm;

