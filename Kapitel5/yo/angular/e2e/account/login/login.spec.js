const config = browser.params;
import UserModel from '../../../server/api/user/user.model';
import {LoginPage} from './login.po';
import {NavbarComponent} from '../../components/navbar/navbar.po';

describe('Login View', function() {
    let page;

    const loadPage = () => {
        return browser.get(`${config.baseUrl}/login`).then(() => {
            page = new LoginPage();
        });
    };

    const testUser = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
    };

    before(async function() {
        await UserModel
            .remove();

        await UserModel.create(testUser);

        await loadPage();
    });

    after(function() {
        return UserModel.remove();
    });

    it('should include login form with correct inputs and submit button', function() {
        expect(page.form.email.getAttribute('type')).to.eventually.equal('email');
        expect(page.form.email.getAttribute('name')).to.eventually.equal('email');
        expect(page.form.password.getAttribute('type')).to.eventually.equal('password');
        expect(page.form.password.getAttribute('name')).to.eventually.equal('password');
        expect(page.form.submit.getAttribute('type')).to.eventually.equal('submit');
        expect(page.form.submit.getText()).to.eventually.equal('Login');
    });

    it('should include oauth buttons with correct classes applied', function() {
        expect(page.form.oauthButtons.facebook.getText()).to.eventually.equal('Connect with Facebook');
        expect(page.form.oauthButtons.google.getText()).to.eventually.equal('Connect with Google+');
        expect(page.form.oauthButtons.twitter.getText()).to.eventually.equal('Connect with Twitter');
    });

    describe('with local auth', function() {
        it('should login a user and redirect to "/home"', async function() {
            await page.login(testUser);

            let navbar = new NavbarComponent();

            browser.ignoreSynchronization = false;
            await browser.wait(() => browser.getCurrentUrl(), 5000, 'URL didn\'t change after 5s');
            browser.ignoreSynchronization = true;

            expect((await browser.getCurrentUrl())).to.equal(`${config.baseUrl}/home`);
            expect((await navbar.navbarAccountGreeting.getText())).to.equal(`Hello ${testUser.name}`);
        });

        describe('and invalid credentials', function() {
            before(() => loadPage());

            it('should indicate login failures', async function() {
                await page.login({
                    email: testUser.email,
                    password: 'badPassword'
                });

                expect((await browser.getCurrentUrl())).to.equal(`${config.baseUrl}/login`);

                let helpBlock = page.form.element(by.css('.form-group.has-error .help-block:not([hidden])'));

                browser.ignoreSynchronization = false;
                await browser.wait(() => helpBlock.getText(), 5000, 'Couldn\'t find help text after 5s');
                browser.ignoreSynchronization = true;

                expect((await helpBlock.getText())).to.equal('This password is not correct.');
            });
        });
    });
});
