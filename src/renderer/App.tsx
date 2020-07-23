import { hot } from 'react-hot-loader/root'
import React, { FC, useState, useEffect } from 'react'

const App: FC = () => {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 5)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>{counter}</div>
  )
}

export default hot(App)
