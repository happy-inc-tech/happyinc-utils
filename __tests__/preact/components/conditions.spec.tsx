import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { If, Else } from '../../../src/preact/components/conditions';

function TestComponent({ condition = true, secondCondition = true }) {
    return (
        <div>
            <If cond={condition}>
                <div>Condition true</div>
                <Else>
                    <div>Condition false</div>
                </Else>
                <Else>
                    <div>Another else block</div>
                    <If cond={secondCondition}>
                        <div>Nested</div>
                        <Else>
                            <div>No nested</div>
                        </Else>
                    </If>
                </Else>
            </If>
        </div>
    );
}

describe('Condition preact components (If/Else)', function () {
    test('Renders correctly if condition is truthy', async () => {
        render(<TestComponent />);
        expect(await screen.queryByText('Condition true')).not.toBeNull();
        expect(await screen.queryByText('Condition false')).toBeNull();
        expect(await screen.queryByText('Another else block')).toBeNull();
    });

    test('Renders correctly if condition is falsy', async () => {
        render(<TestComponent condition={false} />);
        expect(await screen.queryByText('Condition true')).toBeNull();
        expect(await screen.queryByText('Condition false')).not.toBeNull();
        expect(await screen.queryByText('Another else block')).not.toBeNull();
    });

    test('Correctly renders nested conditions', async () => {
        render(<TestComponent condition={false} secondCondition={true} />);
        expect(await screen.queryByText('Nested')).not.toBeNull();
        expect(await screen.queryByText('No nested')).toBeNull();
    });

    test('Correctly renders nested conditions (2)', async () => {
        render(<TestComponent condition={false} secondCondition={false} />);
        expect(await screen.queryByText('Nested')).toBeNull();
        expect(await screen.queryByText('No nested')).not.toBeNull();
    });
});
