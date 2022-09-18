import { Fragment } from 'react';

import TitleNewsPerDay from './TitleNewsPerDay';

const TitleView = ({ news }) => {

    return (
        <Fragment>
            {news && [...news.keys()].map(key => (
                    <TitleNewsPerDay
                        key={key}
                        publicationDate={key}
                        news={news.get(key)}
                    />
                ))
            }
        </Fragment>
    )
}

export default TitleView;