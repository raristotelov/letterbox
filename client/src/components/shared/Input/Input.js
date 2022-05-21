import './Input.scss';

const Input = ( {className, id, type, min, max, required, placeholder, endText, value, onChange, onBlur, autofocus} ) => {
    
    return (
        <div className={className || "sign-input"}>
            <input 
                type={type}
                className="input-field"
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                required={required}
                min={min}
                max={max}
                autoFocus={autofocus}
            />

            <label
                htmlFor={id}
                className="input-label"
                data-content={placeholder}>
            </label>
            
            {endText ? <label className="input-end-label">{endText}</label> : ''}
        </div>
    );
};

export const InputError = (props) => <Input className="sign-input-error" {...props} />

export default Input;
