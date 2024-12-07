import { useState } from "react"

const App = () => {
  const [loading , setLoading] = useState(false) 
  const [data , setData] = useState({}) 
  const [err , setErr] = useState(false) 
  return (
    <>
  <h1>UseReducer</h1>
  <h2>-------------------------------------</h2>
  <h2>Loading {loading ? "true" : "false"}</h2>
  <h2>data {JSON.stringify(data) == "{}" ? "Empty" : "Full"}</h2>
  <h2>err {err? "true" : "false"}</h2>
  <h2>-------------------------------------</h2>
    </>
  )
}

export default App