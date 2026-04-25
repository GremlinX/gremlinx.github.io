/// <reference types="cypress" />

describe('Splash Screen', () => {
  it('exibe a splash screen ao carregar', () => {
    cy.visit('/')
    cy.get('.splash').should('be.visible')
    cy.get('.splash-name').should('contain', 'Marcelo Ito')
    cy.get('.splash-role').should('be.visible')
    cy.get('.splash-fill').should('be.visible')
  })

  it('a splash desaparece e o app é exibido', () => {
    cy.visit('/')
    // Splash aparece primeiro
    cy.get('.splash').should('be.visible')
    // Após animação (~3s), o app principal aparece
    cy.get('main', { timeout: 8000 }).should('be.visible')
    cy.get('.splash').should('not.exist')
  })

  it('exibe o hero após a splash', () => {
    cy.visit('/')
    cy.get('main', { timeout: 8000 }).should('be.visible')
    cy.get('#hero').should('be.visible')
    cy.get('.hero-name').should('contain', 'Marcelo Ito')
  })
})

describe('Hero Section', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('exibe o nome e título corretamente', () => {
    cy.get('.hero-name').should('contain', 'Marcelo Ito')
    cy.get('.hero-title').should('be.visible')
  })

  it('o botão CTA leva à seção de projetos', () => {
    cy.get('.hero-cta').should('have.attr', 'href', '#projetos')
  })

  it('exibe o code snippet decorativo em desktop', () => {
    cy.viewport(1280, 800)
    cy.get('.hero-code-snippet').should('be.visible')
  })

  it('o code snippet é oculto em mobile', () => {
    cy.viewport(375, 812)
    cy.get('.hero-right').should('not.be.visible')
  })
})

describe('Mobile Navigation', () => {
  beforeEach(() => {
    cy.viewport(375, 812)
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('exibe o botão hamburguer em mobile', () => {
    cy.get('.nav-hamburger').should('be.visible')
    cy.get('.nav-links').should('not.be.visible')
  })

  it('abre o drawer ao clicar no hamburguer', () => {
    cy.get('.nav-hamburger').click()
    cy.get('.nav-drawer').should('be.visible')
  })

  it('fecha o drawer ao clicar em um link', () => {
    cy.get('.nav-hamburger').click()
    cy.get('.nav-drawer').should('be.visible')
    cy.get('.nav-drawer a').first().click()
    cy.get('.nav-drawer').should('not.exist')
  })

  it('o backdrop aparece quando o menu está aberto', () => {
    cy.get('.nav-hamburger').click()
    cy.get('.nav-backdrop').should('exist')
  })

  it('fecha o drawer ao clicar no backdrop', () => {
    cy.get('.nav-hamburger').click()
    cy.get('.nav-backdrop').click({ force: true })
    cy.get('.nav-drawer').should('not.exist')
  })
})
