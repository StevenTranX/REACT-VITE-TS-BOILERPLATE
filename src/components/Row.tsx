import * as React from 'react'
import useStyles from './components.styles'
import { BaseGuess } from '~/types/type'
export interface RowProps {
  guess?: BaseGuess
  currentGuess?: string
}

export default function Row({ guess, currentGuess }: RowProps) {
  console.log(guess)
  const { classes } = useStyles()
  if (guess) {
    return (
      <div className={`${classes.row} past`}>
        {guess.map((l, i) => (
          <div key={i} className={`${l.color}`}>
            {l.key}
          </div>
        ))}
      </div>
    )
  }
  if (currentGuess) {
    const letters = currentGuess.split('')
    return (
      <div className={`${classes.row} current`}>
        {letters.map((letter, index) => (
          <div key={index} className={`filled`}>
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }

  // return (
  //   <div className={classes.row}>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // )
}
