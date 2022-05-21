import { ReactComponent as ArrowIcon } from './assets/arrow-icon.svg';
import New from './Newsletter';
import './Label.scss';

const Label = ({ labelTitle, newsCounter, newsletters }) => {

    const handleLabelLabelClick = (e) => {
        const labelsWrapper = e.target.parentElement.parentElement;

        const closeAllLabels = (el, cls) => {
            el.querySelectorAll('.label-wrapper').forEach(x => x.classList.remove(cls));
        }

        const openLabel = (el) => {
            if (el.classList.contains('open')) {
                el.classList.remove('open')
            } else {
                closeAllLabels(labelsWrapper, 'open');
                el.classList.add('open');
            }
        }

        openLabel(e.currentTarget.parentElement)
    }


    return (
        <div className="label-wrapper">
            <div className="label-header" onClick={handleLabelLabelClick}>
                <span className="label-title">{labelTitle}</span>

                <div className="header-additions">
                    <span className="label-newsletters-counter">{newsCounter}</span>
                    <span className="label-arrow">
                        <ArrowIcon />
                    </span>
                </div>
            </div>

            <div className="label-newsletters">
                {
                    newsletters && newsletters
                        .map((newsletter, index) =>
                        (
                            <New
                                key={newsletter._id}
                                newsletter={newsletter} />
                        )
                        )
                }
            </div>
        </div>
    );
}

export default Label;