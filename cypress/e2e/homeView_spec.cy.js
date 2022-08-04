
describe('Home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Should display a title that says TOP STORIES', () => {
      cy.get('h1').contains('TOP STORIES')
    })
  
    it('Should display all Top Stories from NYT', () => {
      cy.get('section.article-container')
    })
  
    it('Should display sort box', () => {
      cy.get('div.article-filter-section')
    })
  
    it('Should have a button the view more details', () => {
      cy.contains('DETAILS').click()
    })
  
  })