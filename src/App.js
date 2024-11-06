import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Error404 from './pages/Error-404'
import Profile from './pages/Profile'

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Header />
        <Sidebar />
        <div className='app-container'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
