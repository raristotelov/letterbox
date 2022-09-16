import { ReactComponent as Logo } from '../Logo/LetterboxLogo.svg';
import './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Logo/>
            </div>
            {props.children}
        </aside>
    );
}

export default Sidebar;