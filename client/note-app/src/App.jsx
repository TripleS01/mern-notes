import { Route, Routes } from 'react-router-dom';
import './App.css'

import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <>
      <Routes>

        <Route index element={<Dashboard />} />
        {/* <Route path={"*"} element={<NotFound />} /> */}

      </Routes>
    </>
  )
}

export default App
