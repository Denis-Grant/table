import { useState } from 'react'
import Table from './Table'


function App() {
  const [count, setCount] = useState(0)
  const [headers, setHeaders] = useState(['Fruits','Colour','Score']) 
  const [data, setData] = useState([
    {fruit: 'Orange', color:'🟠', score: 3 },
    {fruit: 'Apple', color:'🔴', score: 4 },
    {fruit: 'Banana', color:'🟡', score: 2 },
    {fruit: 'Lime', color:'🟢', score: 5 },
  ])
  return (
    <>
      <div className="container mx-auto px-10 mt-10">
        <Table  headers={headers} data={data}/>
      </div>
    </>
  )
}

export default App
