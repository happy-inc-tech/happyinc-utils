import walk from '../src/walk';

const testObject: Record<string, unknown> = {
    id: 1,
    children: [
        {
            id: 2,
            children: []
        },
        {
            id: 3
        },
        {
            id: 4,
            children: [
                {
                    id: 5,
                    children: 'test'
                }
            ]
        }
    ]
};

const testObjectCustomChildren: Record<string, unknown> = {
    id: 1,
    nested: [{ id: 2 }]
};

describe('Walk', function () {
    test('Does not throw error on any data type', () => {
        expect(() => walk(testObject, () => '')).not.toThrowError();
    });

    test('Collects all ids from test dataset', () => {
        const collectedIds: number[] = [];
        walk(testObject, (node: any) => collectedIds.push(node.id));
        expect(collectedIds.length).toBe(5);
        expect(
            collectedIds.includes(1) &&
                collectedIds.includes(2) &&
                collectedIds.includes(3) &&
                collectedIds.includes(4) &&
                collectedIds.includes(5)
        ).toBeTruthy();
    });

    test('Works correctly with custom children prop name', () => {
        const collectedIds: number[] = [];
        walk(
            testObjectCustomChildren,
            (node: any) => collectedIds.push(node.id),
            'nested'
        );
        expect(collectedIds.length).toBe(2);
        expect(
            collectedIds.includes(1) && collectedIds.includes(2)
        ).toBeTruthy();
    });

    test('Works correctly if array passed as initial traversable', () => {
        const collectedIds: number[] = [];
        walk(testObject.children, (node: any) => collectedIds.push(node.id));
        expect(collectedIds.length).toBe(4);
        expect(
            collectedIds.includes(2) &&
                collectedIds.includes(3) &&
                collectedIds.includes(4) &&
                collectedIds.includes(5)
        ).toBeTruthy();
    });
});
