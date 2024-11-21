// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ігноруємо певні помилки
  if (err.message.includes('document.getElementById')) {
    return false // Повертаємо false, щоб Cypress не зупиняв тест
  }
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
