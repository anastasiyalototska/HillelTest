describe('Header and Footer Elements on qauto.forstudy.space', () => {
    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    });
  
    it('Should find all header buttons', () => {
      cy.get('header').within(() => {
        cy.get('a.header_logo').should('be.visible');
        cy.get('a.header-link').contains('Home').should('be.visible');
        cy.get('button[appscrollto="aboutSection"]').should('be.visible');
        cy.get('button[appscrollto="contactsSection"]').should('be.visible');
        cy.get('button.header-link.-guest').should('be.visible');
        cy.get('button.header_signin').should('be.visible');
      });
    });
  
    it('Should find all footer buttons and links', () => {
        cy.get('#contactsSection').should('exist').within(() => {
          cy.get('a.socials_link[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible');
          cy.get('a.socials_link[href="https://t.me/ithillel_kyiv"]').should('be.visible');
          cy.get('a.socials_link[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible');
          cy.get('a.socials_link[href="https://www.instagram.com/hillel_itschool/"]').should('be.visible');
          cy.get('a.socials_link[href="https://www.linkedin.com/school/ithillel/"]').should('be.visible');
          cy.get('a.contacts_link[href="https://ithillel.ua"]').should('be.visible');
          cy.contains('ithillel.ua').should('be.visible');
          cy.get('a.contacts_link[href="mailto:developer@ithillel.ua"]').should('be.visible');
          cy.contains('support@ithillel.ua').should('be.visible');
        });
      });
});

