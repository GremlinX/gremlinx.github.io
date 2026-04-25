/// <reference types="cypress" />

describe('Navegação e seções', () => {
  beforeEach(() => {
    cy.visit('/')
    // Aguarda a splash screen terminar e o app aparecer
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('exibe o nav com todos os links', () => {
    cy.get('.app-nav').should('be.visible')
    cy.get('.nav-logo').should('contain', 'MI.')
    cy.get('.nav-links li').should('have.length', 5)
  })

  it('navega para a seção Sobre ao clicar no link', () => {
    cy.get('.nav-links a').contains(/sobre|about/i).click()
    cy.get('#sobre').should('be.visible')
  })

  it('navega para a seção Projetos ao clicar no link', () => {
    cy.get('.nav-links a').contains(/projetos|projects/i).click()
    cy.get('#projetos').should('be.visible')
  })

  it('navega para a seção Skills ao clicar no link', () => {
    cy.get('.nav-links a').contains(/skills/i).click()
    cy.get('#skills').should('be.visible')
  })

  it('navega para a seção Experiência ao clicar no link', () => {
    cy.get('.nav-links a').contains(/experi/i).click()
    cy.get('#experiencia').should('be.visible')
  })

  it('navega para a seção Contato ao clicar no link', () => {
    cy.get('.nav-links a').contains(/contato|contact/i).click()
    cy.get('#contato').should('be.visible')
  })

  it('todas as seções existem na página', () => {
    const sections = ['#hero', '#sobre', '#projetos', '#skills', '#experiencia', '#contato']
    sections.forEach(id => cy.get(id).should('exist'))
  })
})
