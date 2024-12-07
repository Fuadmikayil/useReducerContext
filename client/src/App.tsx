import { useState } from "react"

const App = () => {
  const [loading , setLoading] = useState(false) 
  const [data , setData] = useState({}) 
  const [err , setErr] = useState(false) 
  return (
    <>
  <h1>UseReducer</h1>
  <h2>-------------------------------------</h2>
  <h2>-------------------------------------</h2>
    </>
  )
}

export default App