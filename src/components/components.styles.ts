import { createStyles, keyframes } from '@mantine/core'

export const flip = keyframes({
  '0%': { transform: 'rotateX(0)', background: `#fff`, borderColor: '#333' },
  '45%': { transform: 'rotateX(90deg)', background: `#fff`, borderColor: '#333' },
  '55%': { transform: 'rotateX(90deg)', background: `#fff`, borderColor: '#333' },
  '100%': { transform: 'rotateX(0deg)', background: `#fff`, borderColor: '#333' }
})

export const bounce = keyframes({
  '0%': { transform: 'scale(1)', borderColor: '#ddd' },
  '50%': { transform: 'scale(1.2)', borderColor: '#ddd' },
  '100%': { transform: 'scale(1)', borderColor: '#333' }
})

export default createStyles(() => {
  return {
    row: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      '> div': {
        display: 'block',
        width: 65,
        height: 65,
        border: `1px solid #bbb`,
        margin: 4,
        textAlign: 'center',
        lineHeight: 60,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20
      },
      '> div:nth-child(2)': {
        animationDelay: `0.2s`
      },
      '> div:nth-child(3)': {
        animationDelay: `0.4s`
      },
      '> div:nth-child(4)': {
        animationDelay: `0.6s`
      },
      '> div:nth-child(5)': {
        animationDelay: `0.8s`
      },
      '> div.green': {
        background: '#5ac85a',
        borderColor: '#5ac85a',
        animation: `${flip} 0.5s ease forwards`
      },
      '> div.grey': {
        background: '#a1a1a1',
        borderColor: '#a1a1a1',
        animation: `flip 0.5s ease forwards`
      },
      '> div.yellow': {
        background: '#e2cc68',
        borderColor: '#e2cc68',
        animation: `flip 0.5s ease forwards`
      },

    },
    '.row.current > div.filled': {
      animation: `${bounce} 0.2s ease-in-out forwards`,
    }
  }
})
