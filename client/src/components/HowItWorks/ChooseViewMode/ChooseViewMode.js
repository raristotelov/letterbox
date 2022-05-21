import { ReactComponent as ViewsImage } from './assets/ViewsImage.svg';
import { ReactComponent as TickIcon } from './assets/TickIcon.svg';
import './ChooseViewMode.scss';

const ChooseViewMode = () => {
    return (
        <div className="choose-view-mode-container">
            <h2 className="title">Choose your view mode</h2>


            <section className="content-container">
                <ViewsImage />

                <section className="view-types-container">
                    <ul className="view-types-list">
                        <li className="view-type-list-item">
                            <TickIcon />
                            <p className="view-type-name">List View</p>
                        </li>

                        <li className="view-type-list-item">
                            <TickIcon />
                            <p className="view-type-name">Card View</p>
                        </li>

                        <li className="view-type-list-item">
                            <TickIcon />
                            <p className="view-type-name">Magazine View</p>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default ChooseViewMode;