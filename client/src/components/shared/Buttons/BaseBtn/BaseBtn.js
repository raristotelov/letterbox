import './BaseBtn.scss';

const BaseBtn = ({
    onClick,
    className,
    children,
    disabled}) => 
    <button 
        className={className || "sign-btn-gray"}  
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>


export const BtnFilledGray = (props) => <BaseBtn className="sign-btn-gray" disabled={true} {...props} />
export const BtnFilledGreen = (props) => <BaseBtn className="sign-btn-green" {...props} />
export const BtnOutline = (props) => <BaseBtn className="sign-btn-outline" {...props} />
export const BtnOutlineGreen = (props) => <BaseBtn className="sign-btn-outline-green" {...props} />


export default BaseBtn;