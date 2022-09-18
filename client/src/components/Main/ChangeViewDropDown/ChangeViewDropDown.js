import { useContext } from 'react';

import { ViewContext } from '../../../contexts/ViewContext';

import { ReactComponent as TitleOnly } from '../shared/assets/tItleOnlyView.svg';
import { ReactComponent as CardView } from '../shared/assets/cardView.svg';
import { ReactComponent as MagazineView } from '../shared/assets/magazineView.svg';

import './ChangeViewDropDown.scss';

const ChangeViewDropDown = () => {
    const viewContextObject = useContext(ViewContext);

    const viewStyleIcon = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleOnly,
    }

    const PageViewIcon = viewStyleIcon[viewContextObject.selectedView]

    return (
        <div className="change-view-dropdown">
            <span>
                change view 

                <span className="change-view-icon">
                    <PageViewIcon />
                </span>
            </span>

            <ul className="change-view-dropdown-content">
                <li onClick={() => viewContextObject.setSelectedView("titleOnlyView")}>
                    <span>
                        <TitleOnly />
                    </span> 

                    Title only view
                </li>

                <li onClick={() => viewContextObject.setSelectedView("cardView")}>
                    <span>
                        <CardView />
                    </span> 

                    Card view
                </li>

                <li onClick={() => viewContextObject.setSelectedView("magazineView")}>
                    <span>
                        <MagazineView />
                    </span> 

                    Magazine view
                </li>
            </ul>

        </div>
    )
}

export default ChangeViewDropDown;