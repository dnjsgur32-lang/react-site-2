import { useState } from 'react'
import './App.css'

function App() {

  return (
      <>
        <h1>과제방</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/react-site-2/" element={<Layout />} />
              <Route index element={<Home />} />
              <Route path="/react-site-2/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
      )
}

      export default App
