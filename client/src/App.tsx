import { useState } from "react"

const App = () => {
  const [loading , setLoading] = useState(false) 
  const [data , setData] = useState({}) 
  const [err , setErr] = useState(false) 
  const handleRequest = async() => {
    setLoading(true)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    console.log(res.status);
    if (res.status == 200) {
      const data = await res.json()
      setLoading(false)
      setData(data)
    }
  }
  return (
    <>
  <h1>UseReducer</h1>
  <button onClick={handleRequest}>send request</button>
  <h2>-------------------------------------</h2>
  <h2>Loading {loading ? "true" : "false"}</h2>
  <h2>data {JSON.stringify(data) == "{}" ? "Empty" : "Full"}</h2>
  <h2>err {err? "true" : "false"}</h2>
  <h2>-------------------------------------</h2>
    </>
  )
}

export default App