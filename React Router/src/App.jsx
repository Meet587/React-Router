
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
const [data, setData] = useState([])
const URL ="https://jsonplaceholder.typicode.com/users"

const options = {
  method: 'GET',
  url: URL,
}

const axiosData = async() => {
await axios(options).then(responce => setData( responce.data))
setTimeout(()=>{
  console.log("in fun",data)
},2000)
}

useEffect(()=> {
  (async()=>{
    await axiosData()
  })()
  console.log("in init",data)
},[])

  return (
    <>
      {data.map((obj)=>{
       return <li key={obj.id}>{obj.name}</li>
      })}
    </>
  )
}

export default App
