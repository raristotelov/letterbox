import OptionsSection from './OptionsSection';
import './NewsOptions.scss';

const NewsOptions = ({ selectedNews, setSelectedNews, news, actions}) => {
    return (
        <section className='news-options' >
            <OptionsSection
                selectedNews={selectedNews}
                setSelectedNews={setSelectedNews}
                news={news}
                actions={actions}
            />
        </section>
    )
}

export default NewsOptions;