import addStylesOverride from '../src/addStylesOverride';

describe('Add styles override', function () {
    test('Adds override', (done) => {
        document.head.innerHTML = `<link rel="stylesheet" href="assets/icons/icons.css">
        <style> #tester { margin-top: 7px; } </style>`;
        document.body.innerHTML = `<div id="tester">Div</div>`;
        const element = document.getElementById('tester') as HTMLDivElement;
        expect(window.getComputedStyle(element).marginTop).toBe('7px');
        addStylesOverride(` #tester { margin-top: 15px!important; } `);
        setTimeout(() => {
            expect(window.getComputedStyle(element).marginTop).toBe('15px');
            done();
        });
    });
});
