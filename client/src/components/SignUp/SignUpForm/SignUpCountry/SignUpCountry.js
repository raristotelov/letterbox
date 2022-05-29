import React, { Fragment } from "react";
import './SignUpCountry.scss';

const SignUpCountry = ({ errState, formData, handleChange, handleValidation, countries }) => {
    return (
        <Fragment>
            {
                errState.countryErr
                ?   <div className="sign-select-error">
                        <select
                            name="country"
                            value={formData.country}
                            id="country"
                            onChange={(e) => {handleChange(e); handleValidation(e);}}>

                                <option label="Country/Region" value="0">Select a country ... </option>

                                {
                                    countries 
                                    ? countries.map((country, index) => (
                                            <option
                                                key={index}
                                                value={country}
                                                label={country}
                                            >
                                                {country}
                                            </option>
                                            )
                                        )
                                    :   (
                                            <option
                                                value="Loading..."
                                                label="Loading...">
                                                    Loading...
                                            </option>
                                        )
                                }
                        </select>

                        <label
                            htmlFor="country"
                            className="select-label"
                            data-content={errState.countryErr}></label>
                    </div>
                :   <div className="country">
                        <select
                            name="country"
                            value={formData.country}
                            id="country"
                            onChange={(e) => {handleChange(e); handleValidation(e);}}>

                            <option label="Country/Region" value="0">Select a country ... </option>

                            {
                                countries 
                                ? countries.map((country, index) => (
                                        <option
                                            key={index}
                                            value={country}
                                            label={country}>
                                                {country}
                                        </option>
                                        )
                                    )
                                :   (
                                        <option value="Loading..." label="Loading...">
                                            Loading...
                                        </option>
                                    )
                            }
                        </select>
                        <label
                            htmlFor="country"
                            className="select-label"
                            data-content="Country/Region"></label>
                    </div>
            }
        </Fragment>
    )
};

export default SignUpCountry;