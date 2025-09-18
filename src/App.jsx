import { useState } from 'react'
import './App.css'
import Button from './Button'
import Show from './Show'
import Users from './Users'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button></Button>
      <Show></Show>
      <Users/>
    </>
  )
}

export default App
