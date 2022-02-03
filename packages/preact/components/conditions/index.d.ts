/**
 * Компоненты-условия для читаемого отображения
 * условной отрисовки
 */
import { createElement, Component, ComponentChild } from 'preact';
import JSX = createElement.JSX;
import { JSXInternal } from 'preact/src/jsx';
import Element = JSXInternal.Element;
interface IfProps {
    cond: boolean;
    children: JSX.Element[];
}
/**
 *
 * @param cond
 * @param children
 * @constructor
 */
export declare function If({ cond, children }: IfProps): Element | null;
export declare class Else extends Component {
    static $$elseComponent: boolean;
    render(): ComponentChild;
}
export {};
