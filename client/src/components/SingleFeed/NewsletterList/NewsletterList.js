import { useContext, useEffect, useState } from 'react';
import NewsletterCard from './NewsletterCard/NewsletterCard';
import AddToBoardModal from '../../Main/shared/AddToBoardModal';
import AddLabelModal from '../../Main/shared/AddLabelModal';
import { SearchContext } from '../../../contexts/SearchContext';
import './NewsletterList.scss';

const NewsletterList = ({ newsletters }) => {
    const { search } = useContext(SearchContext);
    const [filteredNewsletters, setFilterredNewsletters] = useState(newsletters);
    const [addToLabelOpen, setAddToLabelOpen] = useState(false);
    const [createLabelOpen, setCreateLabelOpen] = useState(false);

    useEffect(() => {
        setFilterredNewsletters(newsletters.filter(x => x.name.toLowerCase().includes(search.toLowerCase())));
    }, [search, setFilterredNewsletters, newsletters]);

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

            {filteredNewsletters.map(x => <NewsletterCard key={x._id} newsletter={x} setAddToLabelOpen={setAddToLabelOpen} />)}
        </div>
    );
}

export default NewsletterList;