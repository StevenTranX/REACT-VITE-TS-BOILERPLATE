export interface Solutions {
  id?: number
  word?: string
}

export interface WordleData {
  solutions: Solutions[]
}

export interface BaseGuess {
  key?: string
  color?: string
}
