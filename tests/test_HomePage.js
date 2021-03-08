import { Selector } from 'testcafe';

fixture `MDL Home Page`
  .page `http://localhost:3000/#/`;

test('Title', async t => {
  await t
  .expect(Selector('#markdown-documentation-library-mdl').innerText).eql('Markdown Documentation Library (MDL)');
});

test('Table of contents', async t => {
  await t.expect(Selector('ol > li').count).eql(3);
});
