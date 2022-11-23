import { useEffect, useState } from 'react'

function App() {
  const [clock, setClock] = useState('')

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setClock(date.toLocaleString())
    }, 1000)
  }, [])
  return (
    <div className="min-h-screen grid place-items-center w-full">
      <div className="container grid place-items-center">
        <div className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-clip">
          Dự Toán Xây Dựng
        </div>
        <div className="font-light">{clock}</div>
      </div>
    </div>
  )
}

export default App
