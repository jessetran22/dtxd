import { useEffect, useState } from 'react'

function Intro() {
  const [clock, setClock] = useState(new Date().toLocaleString())

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setClock(date.toLocaleString())
    }, 1000)
  }, [])
  return (
    <div>
      <div className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Dự Toán Xây Dựng
      </div>
      <div className="font-light">{clock}</div>
    </div>
  )
}

export default Intro
