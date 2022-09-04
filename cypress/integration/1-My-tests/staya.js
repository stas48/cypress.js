describe('Проверка работы авторизации staya c неправильным паролем', function () {
    
    it('вход в личный кабинет', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('stanislavmakarov100@gmail.com')
        cy.get('.auth-form > form > [type="password"]').type('Iuf-XfS-WfZ-Q7s').type('{enter}');
        cy.contains('Невозможно войти с предоставленными учетными данными.');

         })
})
