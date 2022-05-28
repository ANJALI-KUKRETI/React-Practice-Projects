describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Header!');
    });
});
