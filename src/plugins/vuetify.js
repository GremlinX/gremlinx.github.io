import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

const portfolioTheme = {
  dark: false,
  colors: {
    background: '#fefae0',
    surface: '#fefae0',
    'surface-bright': '#faedcd',
    primary: '#d4a373',
    secondary: '#ccd5ae',
    accent: '#e9edc9',
    error: '#b85c38',
    info: '#8aa399',
    success: '#7c9a63',
    warning: '#d4a373'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'portfolioTheme',
    themes: {
      portfolioTheme
    }
  },
  defaults: {
    VBtn: {
      rounded: 'xl',
      variant: 'flat'
    },
    VCard: {
      rounded: 'xl',
      elevation: 0
    },
    VChip: {
      rounded: 'xl'
    }
  }
})
