describe('Authenticator:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        cy.visit('/');
    });

    describe('Sign In:', () => {
        it('allows a user to signin', () => {
            // Step 2: Take an action (Sign in)
            cy.get(`a[href="/movies/2"]`).click()
            // cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
            // cy.get(selectors.signInSignInButton).contains('Sign In').click();

            // // Step 3: Make an assertion (Check for sign-out text)
            cy.get(`#title`).contains('two');
        });
    });

});
export const selectors = {
    // Auth component classes
    usernameInput: '[data-test="username-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-test="sign-out-button"]'
}