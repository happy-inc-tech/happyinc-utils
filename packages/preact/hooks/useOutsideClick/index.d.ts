import type { RefObject } from 'preact';
/**
 *  useOutsideClick hook
 *  Проверка, случился ли клик внутри Ref или снаружи.
 *
 * @param ref
 * @param handler
 * @param when
 */
export default function useOutsideClick(ref: RefObject<any>, handler: CallableFunction, when?: boolean): void;
