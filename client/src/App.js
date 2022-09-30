import React, { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setheight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
   try {
    fetch('/users', {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "id": "1",
        "name": name,
        "age": age,
        "height": height
      })
    })
   } catch (error) {
    console.error(error)
    console.log('Something went wrong')
   }
    
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div>

      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            value={height}
            placeholder="Height"
            onChange={(e) => setheight(e.target.value)}
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default App;
