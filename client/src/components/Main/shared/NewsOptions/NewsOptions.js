import OptionsSection from './OptionsSection';
import './NewsOptions.scss';

const NewsOptions = ({ selectedNews, setSelectedNews, news}) => {

    return (
        <section className='news-options' >
            <OptionsSection
                selectedNews={selectedNews}
                setSelectedNews={setSelectedNews}
                news={news}/>
        </section>
    )
}

export default NewsOptions;