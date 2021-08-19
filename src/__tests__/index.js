import { fireEvent, render, waitForElement, screen } from '@testing-library/react';
import App from '../App';

test('home work as expected', async () => {
    const { container } = render(<App />)
    const gifLink = await waitFor(
        () => container.querySelector('.Gif-link')
    )
    expect(gifLink).toBeVisible()
});

test('search form could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    fireEvent.change(input, { value: 'Matriz'})
});

