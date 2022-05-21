import { useState } from 'react';

const useForm = (defaultState) => {
    const [state, setState] = useState(defaultState);

    return [
        state,
        (e) => {
            setState(currentState => ({
                ...currentState,
                [e.target.name]: e.target.value
            }))
        }
    ];
};

export default useForm;