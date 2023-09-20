import useWordle from '~/hook/useWordle'
import { useEffect } from 'react'
import { Box } from '@mantine/core'
import CustomGrid from './CustomGrid'

interface Props {
  solution: string
}

export default function Wordle({ solution }: Props) {
  const { currentGuess, guesses, turn, handleKeyup } = useWordle(solution)
  console.log('currentGuess', currentGuess)
  console.log('guesses', guesses)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])
  return (
    <Box>
      <CustomGrid guesses={guesses} turn={turn} currentGuess={currentGuess} />
    </Box>
  )
}
