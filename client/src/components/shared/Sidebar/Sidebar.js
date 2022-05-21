import { ReactComponent as LogoGreen } from '../Logo/LogoGreen.svg';
import './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <LogoGreen/>
            </div>
            {props.children}
        </aside>
    );
}

export default Sidebar;