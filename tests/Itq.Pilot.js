import { Selector, t } from 'testcafe';

const uNameField = '#login';
const pWordField = '#password';
const lgnBtn = Selector('button[type=submit]');
const pageTitle = Selector('[data-menu-xmlid="itq_basic.itq_system_menu_main"]').nth(0);
const usrTitle = Selector('.oe_topbar_name');
const selectDB = Selector('a').withText('sprint_db')


fixture `Odoo Pilot`
    .page `http://40.65.99.236:49004/`;

test('Login', async t => {
    
    await t .click(selectDB);

    await t
        .setTestSpeed (0.8)
        .typeText(uNameField, 'admin',{paste:true})
        .typeText(pWordField, 'admin',{paste:true})
        .click(lgnBtn)
      //  .expect(usrTitle.innerText).contains('Administrator')
        .expect(pageTitle.innerText).contains('الأنظمة المالية والأدارية');
      console.log(await pageTitle.textContent);
      console.log(await usrTitle.textContent);

});