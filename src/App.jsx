 
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUser(data))
  })
 
  return (
    <>
    <h1 className="text-3xl font-bold text-center ">Total User : {user.length}</h1>
    <h1>Hello roni riman</h1>
    </>
  )
}

export default App
