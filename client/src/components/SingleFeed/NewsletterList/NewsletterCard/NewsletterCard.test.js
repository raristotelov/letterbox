import { render } from '@testing-library/react';
import { NewsletterCard } from './NewsletterCard';
import '@testing-library/jest-dom/extend-expect';

describe('NewsletterCard component', () => {
    const newsletter = {
        name: 'Test name',
        address: 'Test address',
        _id: 'Test id'
    };
    
    test('NewsletterCard component should be rendered', () => {
        const { getByTestId } = render(<NewsletterCard newsletter={newsletter} labels={[]} />);
        expect(getByTestId('newsletter-card')).toBeTruthy();
    });
    
    test('Should have correct name', () => {
        const { getByTestId } = render(<NewsletterCard newsletter={newsletter} labels={[]} />);
        expect(getByTestId('newsletter-card-name')).toHaveTextContent('Test name');
    });

    test('Should have correct address', () => {
        const { getByTestId } = render(<NewsletterCard newsletter={newsletter} labels={[]} />);
        expect(getByTestId('newsletter-card-address')).toHaveTextContent('Test address');
    });
});