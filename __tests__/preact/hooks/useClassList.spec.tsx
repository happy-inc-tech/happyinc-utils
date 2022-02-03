import { renderHook } from '@testing-library/preact-hooks';
import useClassList from '../../../src/preact/hooks/useClassList';

describe('useClassList hook', function () {
    test('Works correctly', async () => {
        const { result, rerender } = renderHook(
            (props) => useClassList(props!.map),
            {
                initialProps: {
                    map: {
                        block: true,
                        disabled: false
                    }
                }
            }
        );
        expect(result.current).toBe(' block');
        rerender({
            map: { block: true, disabled: true }
        });
        expect(result.current).toBe(' block disabled');
    });
});
