const convertParsedDataToLetter = (parsed) => {
    const title = parsed.subject;
    const contentHtml = parsed.html;
    const contentText = parsed.text;
    const contentTextAsHtml = parsed.textAsHtml;
    const date = parsed.date;
    const newsletter = "Robinhood Snacks";
    const username = parsed.to.text.split('@')[0];
    let imgUrl;

    return {
        title,
        contentHtml,
        contentText,
        contentTextAsHtml,
        date,
        newsletter,
        username,
        image: imgUrl,
    };
};

module.exports = {
    convertParsedDataToLetter,
};
