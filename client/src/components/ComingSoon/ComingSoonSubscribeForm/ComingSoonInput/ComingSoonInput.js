import './ComingSoonInput.scss';

const InputText = ({type="text", placeholder, error, errorMessage, id, value, onBlur, onChange}) => {
    return (
        <div className="comingsoon-input-text">         
                <input 
                    className={error ? 'invalid-input' : 'input-text-field'} 
                    type={type} 
                    id={id} 
                    name= {id} 
                    value={value} 
                    placeholder={placeholder} 
                    onBlur={onBlur} 
                    onChange={onChange} />
                {error ? (<div className="error">{errorMessage}</div>):null}
        </div>
    ) 
}

export default InputText;