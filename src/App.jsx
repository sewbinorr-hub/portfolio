import { useState, useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Security from './components/Security'
import Navbar from './components/Navbar'
import SinglePage from './pages/SinglePage'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Ensure dark class is always applied
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col relative">
        <Security />
        <Navbar 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <SinglePage />
      </div>
    </ErrorBoundary>
  )
}

export default App
