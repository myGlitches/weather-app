import React from 'react'

function Header() {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,.1)',
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Weather Data</h2>
      </div>
    </header>
  )
}

export default Header
