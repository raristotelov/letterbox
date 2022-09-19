import "./WhyLetterboxSolutionFeature.scss";

const WhyLetterboxSolutionFeature = ({ header, text, icon }) => {
    const Icon = icon;
    
    return (
        <div className='feature-wrapper'>
            <div className='icon-container'>
                <Icon />
            </div>

            <h3>
                {header}
            </h3>

            <p>
                {text}
            </p>
        </div>
    )
}

export default WhyLetterboxSolutionFeature;
