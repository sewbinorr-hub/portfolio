import { useEffect } from 'react'

const Security = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault()
      return false
    }

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts for debugging
    const handleKeyDown = (e) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+A (Select All)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+C (Copy)
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+V (Paste)
      if (e.ctrlKey && e.key === 'v') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+X (Cut)
      if (e.ctrlKey && e.key === 'x') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+P (Command Palette in DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        return false
      }
    }

    // Disable image saving
    const handleImageContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Console warning
    const originalLog = console.log
    const originalWarn = console.warn
    const originalError = console.error
    const originalInfo = console.info

    console.log = function(...args) {
      if (args[0]?.includes?.('DevTools') || args[0]?.includes?.('debug')) {
        return
      }
      originalLog.apply(console, args)
    }

    console.warn = function(...args) {
      if (args[0]?.includes?.('DevTools') || args[0]?.includes?.('debug')) {
        return
      }
      originalWarn.apply(console, args)
    }

    console.error = function(...args) {
      if (args[0]?.includes?.('DevTools') || args[0]?.includes?.('debug')) {
        return
      }
      originalError.apply(console, args)
    }

    console.info = function(...args) {
      if (args[0]?.includes?.('DevTools') || args[0]?.includes?.('debug')) {
        return
      }
      originalInfo.apply(console, args)
    }

    // Detect DevTools opening (warning only, not blocking)
    let devtools = { open: false, orientation: null }
    const threshold = 160

    const detectDevTools = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true
          // Show console warning
          console.clear()
          console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;')
          console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.', 'color: red; font-size: 16px;')
        }
      } else {
        devtools.open = false
      }
    }

    const devToolsInterval = setInterval(detectDevTools, 500)

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('contextmenu', handleImageContextMenu, true)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('contextmenu', handleImageContextMenu, true)
      clearInterval(devToolsInterval)
      
      // Restore console
      console.log = originalLog
      console.warn = originalWarn
      console.error = originalError
      console.info = originalInfo
    }
  }, [])

  return null
}

export default Security
