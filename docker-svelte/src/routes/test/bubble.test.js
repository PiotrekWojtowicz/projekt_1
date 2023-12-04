
import '@testing-library/jest-dom';
import Bubble from '../bubble.svelte';
import {render} from "@testing-library/svelte";

test('Renders with the proper message.', () => {
    render(Bubble, { props: { messageText: 'Siema to jest teścik essa?' } });
    expect(screen.getByText('Siema to jest teścik essa?')).toBeInTheDocument();
});
