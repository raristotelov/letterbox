import transformReadLaterNews from './transformReadLaterNews';

describe('transformReadLaterNews function', () => {
    it('should return Map with news', () => {
        const news = [{ name: 'First' }, { name: 'Second' }];

        const expected = new Map();
        expected.set('LATEST', [{ name: 'First' }, { name: 'Second' }]);

        const received = transformReadLaterNews(news);

        expect(received).toEqual(expected);
    });
});