import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'Noto Serif',
      styles: ['400'],
    },
    {
      name: 'Pontano Sans',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Noto Serif', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
