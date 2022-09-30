import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import uuid from 'react-uuid';

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
        "id": uuid(),
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
    <div className="App" style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>
            Create User
          </Card.Title>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                style={{marginTop: '1rem', width: '100%'}}
              />
              <input
                type="text"
                value={age}
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                style={{marginTop: '1rem', width: '100%'}}
              />
              <input
                type="text"
                value={height}
                placeholder="Height"
                onChange={(e) => setheight(e.target.value)}
                style={{marginTop: '1rem', width: '100%'}}
              />
              <Button 
                  variant="primary"
                  type="submit"
                  style={{marginTop: '1rem'}}
              >
                Submit</Button>
            </form>
          </div>
          </Card.Body>
      </Card>
    </div>
  );
}

export default App;
