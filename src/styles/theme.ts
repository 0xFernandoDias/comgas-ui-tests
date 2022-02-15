import { extendTheme } from '@chakra-ui/react'

const fonts = {
  body: 'Work Sans',
}

const colors = {
  brand: {
    1: '#474747',
    2: '#2F6DB0',
    3: '#8FBB39',
    4: '#9C9C9C',
    5: '#84BD00',
    6: '#000000',
    7: '#E0E0E0',
  },
}

const textStyles = {}

const styles = {
  global: (props) => ({
    body: {
      minHeight: '100%',
      maxWidth: '570px',
      display: 'flex',
      top: '0',
      left: '0',
      margin: '0',
      padding: '0',
      fontFamily: 'Work Sans',
      boxSizing: 'border-box',
    },
  }),
}

export const theme = extendTheme({ fonts, colors, textStyles, styles })
