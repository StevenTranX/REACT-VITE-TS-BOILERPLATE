import { Center, Title, Box, Stack } from '@mantine/core'
import { useState, useEffect } from 'react'
import './App.css'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
  return (
    <Box>
      <Center>
        <Stack>
          <Title>Wordle - {solution}</Title>
          {solution && <Wordle solution={solution} />}
        </Stack>
      </Center>
    </Box>
  )
}

export default App
