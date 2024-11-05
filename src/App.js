import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Error404 from './pages/Error-404'

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
