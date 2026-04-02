import { useState } from 'react'


function App() {
  const [data, setData] = useState(null);
  const receive= async ()=>{
    const res=await fetch("http://localhost:3000/backend") 
    const results=await res.json()
    setData(results)
    console.log(results)
  }
  const send = async () => {
    const info = { Grey: "Hello from React by Grey" };
    

    console.log("Sending data to Render..."); 

    try {
      const res = await fetch("https://connect-2s8t.onrender.com/backend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (res.ok) {
        console.log("Success! Data reached the server.");
      } else {
        console.log("Server received it but sent an error:", res.status);
      }
    } catch (error) {
      console.error("The request failed to even leave the browser:", error);
    }
  };

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
