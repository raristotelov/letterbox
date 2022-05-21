import { ReactComponent as Bookmark} from '../../Main/shared/assets/bookmark.svg'
import { ReactComponent as Comment} from '../../Main/shared/assets/comment.svg'
import { ReactComponent as Share} from '../../Main/shared/assets/share.svg'
import { FacebookShareButton } from 'react-share';

import './ReadNewsOptionsMenu.scss';

const ReadNewsOptionsMenu = ({onMarkNewsReadLater, commentInputModalOpenHandler, title}) => {

    return (
        <ul className='read-news-options'>
            <li onClick={onMarkNewsReadLater}><Bookmark /><span>Read Later</span></li>
            <li onClick={()=>commentInputModalOpenHandler()}><Comment /><span>Comment</span></li>
            <li><FacebookShareButton 
                    url={"https://letterbox-binary-zone.web.app/"}
                    quote={title}
                    hashtag="#news #letterbox">
                    <div className='read-news-options-share'><Share className='share-icon'/><span>Share</span></div>
                </FacebookShareButton>
            </li>
        </ul>
    )
}

export default ReadNewsOptionsMenu;