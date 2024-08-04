import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [peoples, setPeoples] = useState([])

useEffect(() => {
axios.get('/api/peoples').then((response) =>{
  setPeoples(response.data)
}).catch((error)=>{
  console.log(error)
})
})
  
return (
    <>
<h1> QA Folks</h1>
<p>People List: {peoples.length}</p>
{
  peoples.map((people, index) =>(
    <div key={people.id}>
      <h3>{people.title}</h3>
      <p>{people.name}</p>
    </div>
  ))
}
    </>
  )
}

export default App
