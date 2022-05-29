import React, { Fragment } from "react";
import { BtnFilledGray, BtnFilledGreen } from '../../../shared/Buttons/BaseBtn/BaseBtn';
import './SignUpButton.scss';

const SignUpButton = ({ formData, signUpErr }) => {
    return (
        <Fragment>
            {   
                formData.email      &&
                formData.password   &&
                formData.firstName  &&
                formData.lastName   &&
                formData.year       &&
                formData.month      &&
                formData.day        &&
                formData.country    &&
                !signUpErr
                    ? <BtnFilledGreen className="sign-btn-green">Sign up</BtnFilledGreen>
                    : <BtnFilledGray className="sign-btn-gray">Sign up</BtnFilledGray>
            }
        </Fragment>
    )
};

export default SignUpButton;