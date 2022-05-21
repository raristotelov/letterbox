import './ComingSoonFeature.scss';

const Feature = ({ icon, titleFirstRow, titleSecondRow, contentFirstRow, contentSecondRow, contentThirdRow }) => {
    return (
        <article className="feature-article">
            <div className="feature-article-icon">{icon}</div>
            <h3 className="feature-article-title"><span>{titleFirstRow}</span>{titleSecondRow}</h3>
            
            <p className="feature-article-content">
                <span>{contentFirstRow}</span>
                <span>{contentSecondRow}</span>
                <span>{contentThirdRow}</span>
            </p>
        </article>
    )
}

export default Feature;