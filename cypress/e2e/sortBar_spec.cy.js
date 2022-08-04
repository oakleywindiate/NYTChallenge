
describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
  
    it('Should display sort box', () => {
        cy.get('div.article-filter-section')
    })
  
    it('Should allow a user to select an option on the dropdown menu', () => {
        cy.get('.section-level-dropdown').select('podcasts', { force: true })
    })
  
})
