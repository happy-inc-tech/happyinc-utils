import { renderHook } from '@testing-library/preact-hooks';
import useMounted from '../../../src/preact/hooks/useMounted';
import { useEffect, useState } from 'preact/hooks';

jest.mock('preact/hooks', () => {
    const original = jest.requireActual('preact/hooks');
    return {
        useEffect: jest
            .fn()
            .mockImplementation((callback: CallableFunction, deps: any[]) => {
                return original.useEffect(callback, deps);
            }),
        useState: jest.fn().mockImplementation((value: any) => {
            return original.useState(value);
        })
    };
});

describe('useMounted hook', function () {
    test('Works correctly', async () => {
        const { result } = renderHook(() => useMounted());
        expect(useState).toBeCalledTimes(2);
        expect(useEffect).toBeCalledTimes(2);
        expect(result.current).toBe(true);
    });
});
