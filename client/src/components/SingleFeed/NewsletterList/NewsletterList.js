import { useContext, useEffect, useState } from 'react';
import NewsletterCard from './NewsletterCard/NewsletterCard';
import AddToBoardModal from '../../Main/shared/AddToBoardModal';
import AddLabelModal from '../../Main/shared/AddLabelModal';
import { SearchContext } from '../../../contexts/SearchContext';
import Loader from '../../shared/Loader/Loader';

import './NewsletterList.scss';

const NewsletterList = ({ newsletters, isLoading }) => {
    const searchContextObject = useContext(SearchContext);
    const [filteredNewsletters, setFilterredNewsletters] = useState(null);
    const [addToLabelOpen, setAddToLabelOpen] = useState(false);
    const [createLabelOpen, setCreateLabelOpen] = useState(false);

    useEffect(() => {
        if (searchContextObject?.search) {
            setFilterredNewsletters(newsletters.filter(x => x.name.toLowerCase().includes(searchContextObject.search.toLowerCase())));
        } else {
            setFilterredNewsletters(newsletters);
        }
    }, [searchContextObject?.search, setFilterredNewsletters, newsletters]);

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    return (
        <div className="newsletter-list-container">
            <AddToBoardModal
                isOpen={addToLabelOpen}
                onCloseClick={() => setAddToLabelOpen(false)}
                setCreateLabelOpen={setCreateLabelOpen}
            />

            <AddLabelModal
                isOpen={createLabelOpen}
                onCloseClick={() => setCreateLabelOpen(false)}
            />

            {filteredNewsletters?.length 
                ? filteredNewsletters
                    .map(x => (
                        <NewsletterCard 
                            key={x._id} 
                            newsletter={x} 
                            setAddToLabelOpen={setAddToLabelOpen} 
                        />
                    )) : (
                    <span className='no-information'>
                        No newslettres are currently added to this feed.  
                    </span>
                )
            }
        </div>
    );
}

export default NewsletterList;