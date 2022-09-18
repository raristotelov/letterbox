import { Fragment } from 'react';

import TitleNewsPerDay from './TitleNewsPerDay';

const TitleView = ({ news, newsActions }) => {

    return (
        <Fragment>
            {news && [...news.keys()].map(key => (
                    <TitleNewsPerDay
                        key={key}
                        publicationDate={key}
                        news={news.get(key)}
                        newsActions={newsActions}
                    />
                ))
            }
        </Fragment>
    )
}

export default TitleView;