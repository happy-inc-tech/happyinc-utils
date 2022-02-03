import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import useOutsideClick from '../../../src/preact/hooks/useOutsideClick';

function TestComponent() {
    const [visible, setVisible] = useState(true);
    const contentRef = useRef(null);

    useOutsideClick(contentRef, () => setVisible(false), visible);

    return (
        <div data-testid={'wrapper'}>
            <br /> <br />
            {visible && (
                <div data-testid={'content'} ref={contentRef}>
                    Content
                    <div data-testid={'content-child'} />
                </div>
            )}
        </div>
    );
}

describe('useOutsideClick hook', function () {
    test('Should display block at start', async () => {
        render(<TestComponent />);
        expect(await screen.queryByTestId('content')).not.toBeNull();
    });

    test('When click on content, nothing changes', async () => {
        render(<TestComponent />);
        fireEvent.click(screen.getByTestId('content'));
        const contentBlock = await screen.queryByTestId('content');
        expect(contentBlock).not.toBeNull();
    });

    test('When click on content children, nothing changes', async () => {
        render(<TestComponent />);
        fireEvent.click(screen.getByTestId('content-child'));
        const contentBlock = await screen.queryByTestId('content');
        expect(contentBlock).not.toBeNull();
    });

    test('When click on wrapper, content disappears', async () => {
        render(<TestComponent />);
        fireEvent.click(screen.getByTestId('wrapper'));
        const contentBlock = await screen.queryByTestId('content');
        expect(contentBlock).toBeNull();
    });
});
