import { useEffect, useRef, useCallback } from 'preact/hooks';
import type { RefObject } from 'preact';

/**
 *  useOutsideClick hook
 *  Проверка, случился ли клик внутри Ref или снаружи.
 *
 * @param ref
 * @param handler
 * @param when
 */
export default function useOutsideClick(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: RefObject<any>,
    handler: CallableFunction,
    when = true
): void {
    const savedHandler = useRef(handler);
    const memoizedCallback = useCallback(
        (e: Event) => {
            if (ref && ref.current && !ref.current.contains(e.target)) {
                savedHandler.current(e);
            }
        },
        [ref]
    );
    useEffect(() => {
        savedHandler.current = handler;
    });
    useEffect(() => {
        if (when) {
            document.addEventListener('click', memoizedCallback, true);
            document.addEventListener('ontouchstart', memoizedCallback, true);
            return () => {
                document.removeEventListener('click', memoizedCallback, true);
                document.removeEventListener(
                    'ontouchstart',
                    memoizedCallback,
                    true
                );
            };
        }
    }, [ref, handler, when, memoizedCallback]);
}
