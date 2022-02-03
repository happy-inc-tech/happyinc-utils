/**
 * Компоненты-условия для читаемого отображения
 * условной отрисовки
 */
import { h, Fragment, Component } from 'preact';
function isElseComponent(element) {
    return (typeof element.type !== 'string' && '$$elseComponent' in element.type);
}
/**
 *
 * @param cond
 * @param children
 * @constructor
 */
export function If({ cond, children }) {
    const childrenArray = [].concat(children);
    if (cond) {
        const withoutElses = [];
        for (const child of childrenArray) {
            if (!isElseComponent(child))
                withoutElses.push(child);
        }
        return h(Fragment, null, withoutElses);
    }
    const elseComponents = childrenArray.filter((child) => isElseComponent(child));
    return elseComponents.length ? h(Fragment, null, elseComponents) : null;
}
export class Else extends Component {
    render() {
        return h(Fragment, null, this.props.children);
    }
}
Else.$$elseComponent = true;
