import { useState } from 'react'


function App() {
  const [data, setData] = useState(null);
  const receive= async ()=>{
    const res=await fetch("http://localhost:3000/backend") 
    const results=await res.json()
    setData(results)
    console.log(results)
  }
  const send = async()=>{
    const info={Grey: "Hello from React by Grey"}
    await fetch("http://localhost:3000/backend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info), 
    });
  }

  return (
    <>
      <button onClick={receive}>Get Backend info</button>
      <button onClick={send}>Send to Backend</button>
      {data && data.map((item)=>(
        <div >
          {item.Grey}
        </div>
      ))}
    </>
  )
}

export default App
