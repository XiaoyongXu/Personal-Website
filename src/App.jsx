
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
