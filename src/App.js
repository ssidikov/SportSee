import { HashRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Header></Header>
      </div>
    </HashRouter>
  )
}

export default App
