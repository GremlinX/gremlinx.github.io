/// <reference types="cypress" />

describe('Seção Sobre', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
  })

  it('exibe a foto de perfil', () => {
    cy.get('#sobre img.sobre-photo').should('exist')
  })

  it('exibe o botão de download do CV', () => {
    cy.get('.cv-btn').scrollIntoView()
    cy.get('.cv-btn')
      .should('be.visible')
      .and('have.attr', 'download')
      .and('include', 'CV-Marcelo-Ito.pdf')
    cy.get('.cv-btn')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'cv-marcelo-ito.pdf')
  })

  it('exibe os stats corretamente', () => {
    cy.get('.sobre-stats .stat').should('have.length', 3)
  })
})

describe('Seção Projetos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('#projetos').scrollIntoView()
  })

  it('exibe o card featured do Minoru', () => {
    cy.get('.project-card.featured').should('be.visible')
    cy.get('.project-card.featured .project-name').should('contain', 'Minoru')
  })

  it('exibe ao menos 2 projetos', () => {
    cy.get('.project-card').should('have.length.gte', 2)
  })

  it('exibe tags em cada projeto', () => {
    cy.get('.project-card').first().find('.project-tags span').should('have.length.gte', 1)
  })
})

describe('Seção Skills', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('#skills').scrollIntoView()
  })

  it('exibe ao menos 3 categorias de skills', () => {
    cy.get('.skill-category').should('have.length.gte', 3)
  })

  it('exibe badges dentro de cada categoria', () => {
    cy.get('.skill-category').first().find('.skill-badge').should('have.length.gte', 1)
  })
})

describe('Seção Experiência', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('#experiencia').scrollIntoView()
  })

  it('exibe 2 itens na timeline', () => {
    cy.get('.timeline-item').should('have.length', 2)
  })

  it('o último item da timeline tem badge "Atual" ou "Current"', () => {
    cy.get('.timeline-current-badge').scrollIntoView()
    cy.get('.timeline-current-badge').should('be.visible')
  })
})

describe('Seção Contato', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main', { timeout: 10000 }).should('be.visible')
    cy.get('#contato').scrollIntoView()
  })

  it('exibe os links sociais', () => {
    cy.get('.contato-link').should('have.length.gte', 2)
    cy.get('.contato-link').each(($el) => {
      cy.wrap($el).should('have.attr', 'href').and('not.be.empty')
    })
  })

  it('exibe o email com link mailto', () => {
    cy.get('.contato-email').should('have.attr', 'href').and('include', 'mailto:')
  })

  it('os links sociais abrem em nova aba', () => {
    cy.get('.contato-link').each(($el) => {
      cy.wrap($el).should('have.attr', 'target', '_blank')
    })
  })
})
