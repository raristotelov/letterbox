import { ReactComponent as TitleOnly } from '../shared/assets/tItleOnlyView.svg';
import { ReactComponent as CardView } from '../shared/assets/cardView.svg';
import { ReactComponent as MagazineView } from '../shared/assets/magazineView.svg';

import './ChangeViewDropDown.scss';

const ChangeViewDropDown = ({ view, setView }) => {

    const viewStyleIcon = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleOnly,
    }

    const PageViewIcon = viewStyleIcon[view]

    return (
        <div className="change-view-dropdown">
            <span>change view <span className="change-view-icon"><PageViewIcon /></span></span>
            <ul className="change-view-dropdown-content">
                <li onClick={() => setView("titleOnlyView")}><span><TitleOnly /></span> Title 0nly view</li>
                <li onClick={() => setView("cardView")}><span><CardView /></span> Card view</li>
                <li onClick={() => setView("magazineView")}><span><MagazineView /></span> Magazine view</li>
            </ul>

        </div>
    )
}

export default ChangeViewDropDown;