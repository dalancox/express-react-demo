import React, { useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch('/form-post', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name
        }),
      })
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default App;
