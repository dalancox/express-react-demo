import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login'
import Dashboard from './Dashboard'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={
          <Login />
        }></Route>
        <Route path='/dashboard' element={
          <Dashboard />
        }></Route>
      </Routes>
    </Router>
    </>
  )

}

export default App;
