import { useState } from 'react'

export interface FormattedGuess {
  key: string
  color: string
}

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  const formatGuess = (): FormattedGuess[] => {
    const solutionArray: (string | null)[] = [...solution]
    // ['b', 'l', 'i', 'n', 'g']

    // *clone mảng mới từ mảng kết quả với màu xám
    const formattedGuess = [...currentGuess].map((letter) => {
      // clone lại mảng của người chơi sau đó map ra 1 mảng mới với phần tử là 1 object có chứa key và color ví dụ :
      // [{key : 'L', color : 'gray'}, {key : 'K', color : 'gray'}]
      return { key: letter, color: 'grey' }
    })

    // *logic tìm chữ màu xanh
    formattedGuess.forEach((letter, index) => {
      // vì sao dùng forEach thay vì map ? vì ta đang muốn thay đổi trực tiếp trên mảng formattedGuess
      if (solution[index] === letter.key) {
        formattedGuess[index].color = 'green'
        solutionArray[index] = null
        // Nếu như vị trí chữ cái của solution = vị trí chữ của mảng thì màu đổi sang màu xanh, và vị trí đó trong mảng solutionArray thành null
      }
    })
    // *logic tìm chữ màu vàng
    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[index].color = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
      // Nếu như mảng solution có chữ cái nhưng chữ cái lại ko phải màu xanh, thì đổi sang màu vàng, và vị trí đó đổi thành null
    })
    return formattedGuess
  }

  const addNewGuess = (formattedGuess: FormattedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses((prev) => {
      const newGuesses = [...prev]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory((prev) => {
      return [...prev, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    setCurrentGuess('')
  }

  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('You used all your guesses!')
        return
      }

      // do not allow duplicate words
      if (history.includes(currentGuess as never)) {
        console.log('You already tried that word')
        return
      }

      if (currentGuess.length !== 5) {
        console.log('Word must be 5 chars')
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
