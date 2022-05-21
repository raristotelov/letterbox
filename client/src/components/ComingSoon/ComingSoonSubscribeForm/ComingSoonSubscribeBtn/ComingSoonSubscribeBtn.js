import './ComingSoonSubscribeBtn.scss'

const SubscribeBtn = ( {onClick, children} ) => {
    return (
        <button className="comingsoon-subscribe-button" onClick={onClick}>{children}</button>
    )
}

export default SubscribeBtn;