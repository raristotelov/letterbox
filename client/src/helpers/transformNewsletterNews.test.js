import transformNewsletterNews from './transformNewsletterNews';

describe('transformNewsletterNews function', () => {
    test('should return a Map with newsletters sorted by date', () => {
        const newsletters = [
            {
                date: '2021-03-02T10:00:00.000Z',
                name: 'First'
            },
            {
                date: '2021-03-06T13:22:29.000Z',
                name: 'Second'
            }
        ];

        const expected = new Map();
        expected.set('Mar 06 2021', [{ date: '2021-03-06T13:22:29.000Z', name: 'Second' }]);
        expected.set('Mar 02 2021', [{ date: '2021-03-02T10:00:00.000Z', name: 'First' }]);

        const received = transformNewsletterNews(newsletters);
        
        expect(received).toEqual(expected);
    });
});