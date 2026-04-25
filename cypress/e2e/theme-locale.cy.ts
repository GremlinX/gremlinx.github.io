/// <reference types="cypress" />

describe('Toggle de tema (Dark Mode)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    // Reset to light theme before each test
    cy.window().then(win => win.localStorage.removeItem('portfolio-theme'))
    cy.reload()
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('começa no tema claro por padrão', () => {
    cy.get('html').should('not.have.class', 'dark')
  })

  it('alterna para tema escuro ao clicar no toggle', () => {
    cy.get('.theme-toggle').first().click()
    cy.get('html').should('have.class', 'dark')
  })

  it('volta para tema claro ao clicar novamente', () => {
    cy.get('.theme-toggle').first().click()
    cy.get('html').should('have.class', 'dark')
    cy.get('.theme-toggle').first().click()
    cy.get('html').should('not.have.class', 'dark')
  })

  it('persiste o tema escuro após recarregar a página', () => {
    cy.get('.theme-toggle').first().click()
    cy.get('html').should('have.class', 'dark')
    cy.reload()
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('html').should('have.class', 'dark')
  })

  it('o label do toggle muda conforme o tema atual', () => {
    // Em light mode, mostra "Dark — Tema noite"
    cy.get('.theme-toggle').first().should('contain.text', 'Dark')
    cy.get('.theme-toggle').first().click()
    // Em dark mode, mostra "Light — Tema café"
    cy.get('.theme-toggle').first().should('contain.text', 'Light')
  })
})

describe('Toggle de idioma (i18n)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    // Reset to PT-BR before each test
    cy.window().then(win => win.localStorage.setItem('portfolio-locale', 'pt-BR'))
    cy.reload()
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('começa em Português por padrão', () => {
    cy.get('html').should('have.attr', 'lang', 'pt-BR')
  })

  it('PT aparece ativo no toggle', () => {
    cy.get('.locale-toggle').first().find('span.active').should('contain', 'PT')
  })

  it('alterna para inglês ao clicar no toggle', () => {
    cy.get('.locale-toggle').first().click()
    cy.get('html').should('have.attr', 'lang', 'en')
    cy.get('.locale-toggle').first().find('span.active').should('contain', 'EN')
  })

  it('os textos da nav mudam para inglês', () => {
    cy.get('.locale-toggle').first().click()
    cy.get('.nav-links').should('contain.text', 'About')
    cy.get('.nav-links').should('contain.text', 'Projects')
    cy.get('.nav-links').should('contain.text', 'Experience')
    cy.get('.nav-links').should('contain.text', 'Contact')
  })

  it('persiste o idioma após recarregar', () => {
    cy.get('.locale-toggle').first().click()
    cy.get('html').should('have.attr', 'lang', 'en')
    cy.reload()
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('html').should('have.attr', 'lang', 'en')
  })
})
