import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../Logo/LetterboxLogo.svg';

import './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Link to={'/'}>
                    <Logo/>
                </Link>
            </div>
            {props.children}
        </aside>
    );
}

export default Sidebar;