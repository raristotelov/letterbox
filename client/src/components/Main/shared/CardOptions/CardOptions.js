import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import NewsOptionsDropDown from '../NewsOptionsDropDown';
import { FacebookShareButton } from 'react-share';

import './CardOptions.scss';

const CardOptions = ({ id, onMarkNewsReadLater, newsTitle }) => {

    return (
        <section className="news-card-options">
            <div className='news-option'>
                <Bookmark onClick={()=>{onMarkNewsReadLater({id})}}/>
            </div>

            <div className='news-option'>
                <FacebookShareButton 
                    url={"https://letterbox-binary-zone.web.app/"}
                    quote={newsTitle}
                    hashtag="#news #letterbox"
                >
                    <ShareIcon />
                </FacebookShareButton>
            </div>
            
            <div>
              
                    <NewsOptionsDropDown id={id} />
           
            </div>
        </section>
    );
}

export default CardOptions;