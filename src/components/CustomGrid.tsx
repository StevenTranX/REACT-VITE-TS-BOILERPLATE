import { Box } from '@mantine/core'
import { BaseGuess } from '~/types/type'
import Row from './Row'

export interface GridProps {
  guesses: BaseGuess[]
  currentGuess: string
  turn: number
}

export default function CustomGrid({ guesses, currentGuess, turn }: GridProps) {
  // const { classes } = useStyles()
  return (
    <Box>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />
        }
        return <Row key={index} guess={guess} />
      })}
    </Box>
  )
}
