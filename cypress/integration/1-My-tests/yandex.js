
describe('Тестирование главной страницы яндекс', function () {
   it('Проверка, что при поиске котята в выдаче есть слова Картинки по запросу котята', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята').type('{enter}');
        cy.get('.Composite > :nth-child(1) > .UniSearchHeader > .Link > .UniSearchHeader-Title-Text')
        cy.contains('Картинки по запросу «котята»');
    })
})
