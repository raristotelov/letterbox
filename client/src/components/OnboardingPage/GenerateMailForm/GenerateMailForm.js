import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BtnFilledGray, BtnFilledGreen } from '../../shared/Buttons/BaseBtn/BaseBtn';
import Input, { InputError } from '../../shared/Input/Input';
import { createEmailMaskAction } from '../../../actions/userActions';

import './GenerateMailForm.scss';
import { useForm } from '../../../hooks';

const GenerateMailForm = ({ user, createEmailMaskAction }) => {
    const history = useHistory();

    const [stateInput, setUsernameValue] = useForm({ username: '' });
    const [errState, setErrValue] = useState({ usernameErr: false });
    const [validated, setValidated] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();

        if (stateInput.username && validated && user) {
            const idToken = await user.getIdToken(true);
            try {
                await createEmailMaskAction(stateInput.username, idToken, user);
                history.push('/explore-feeds');
            } catch (res) {
                alert(res.error);
            }
        }
    };

    const validateUsername = () => {
        const pattern = /^[\w\.]+$/;

        if (stateInput.username === '') {
            setErrValue({ usernameErr: false });
            setValidated(false);
            return;
        }

        if (!stateInput.username.match(pattern)) {
            setErrValue({ usernameErr: 'Sorry, symbols are not allowed' });
            setValidated(false);
            return;
        }

        setErrValue({ usernameErr: false });
        setValidated(true);
    };

    useEffect(validateUsername, [stateInput]);

    return (
        <form className="generate-mail-form" onSubmit={submitForm}>
            <div className="header-container">
                <h1>Newsletter-App mail</h1>

                <h4>Subscribtions for newsletters will be made with this mail.</h4>
            </div>

            <div className="input-container">
                {errState.usernameErr ? (
                    <InputError
                        id="username"
                        type="text"
                        placeholder={errState.usernameErr}
                        value={stateInput.username}
                        endText="@newsletterapp.io"
                        onChange={setUsernameValue}
                        autofocus={stateInput.username}
                    />
                ) : (
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={stateInput.username ? stateInput.username : ''}
                        endText="@newsletterapp.io"
                        onChange={setUsernameValue}
                        autofocus={stateInput.username}
                    />
                )}
            </div>

            <div className="btn-container">
                {stateInput.username && validated && !errState.usernameErr ? (
                    <BtnFilledGreen className="sign-btn-green">Create Newsletter-App Mail</BtnFilledGreen>
                ) : (
                    <BtnFilledGray className="sign-btn-gray">Create Newsletter-App Mail</BtnFilledGray>
                )}
            </div>
        </form>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    state: state,
});

const mapDispatchToProps = {
    createEmailMaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMailForm);
