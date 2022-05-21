import TitleNewsPerDay from './TitleNewsPerDay';

const TitleView = ({ news }) => {

    return (
        <>
            {
                news && [...news.keys()].map(key => <TitleNewsPerDay
                    key={key}
                    publicationDate={key}
                    news={news.get(key)} />)
            }
        </>
    )
}

export default TitleView;