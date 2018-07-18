import { Selector } from 'testcafe';

/*
Execution command:

testcafe chrome test01.js -s ./

*/

fixture `login`
    .page `http://localhost:3000`;

test(`login test`, async t => {
    // t Test controller

    const tab = await Selector('body > h1');
    let tabText = await tab.innerText;
    tabText = tabText.trim();

    await t.expect(tabText).eql('Express', 'Page loaded successfuly');
});