/**
 * Компоненты-условия для читаемого отображения
 * условной отрисовки
 */
import { createElement, h, Fragment, Component, ComponentChild } from 'preact';
import JSX = createElement.JSX;
import { JSXInternal } from 'preact/src/jsx';
import Element = JSXInternal.Element;

interface IfProps {
    cond: boolean;
    children: JSX.Element[];
}

function isElseComponent(element: JSX.Element): boolean {
    return (
        typeof element.type !== 'string' && '$$elseComponent' in element.type
    );
}

/**
 *
 * @param cond
 * @param children
 * @constructor
 */
export function If({ cond, children }: IfProps): Element | null {
    const childrenArray = ([] as JSX.Element[]).concat(children);

    if (cond) {
        const withoutElses: Array<Element | string> = [];
        for (const child of childrenArray) {
            if (!isElseComponent(child)) withoutElses.push(child);
        }
        return <Fragment>{withoutElses}</Fragment>;
    }

    const elseComponents = childrenArray.filter((child) =>
        isElseComponent(child)
    );
    return elseComponents.length ? <Fragment>{elseComponents}</Fragment> : null;
}

export class Else extends Component {
    static $$elseComponent = true;

    render(): ComponentChild {
        return <Fragment>{this.props.children}</Fragment>;
    }
}
