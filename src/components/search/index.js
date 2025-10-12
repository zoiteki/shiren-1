import React from 'react'

const SearchComponent = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <input 
        type="text" 
        placeholder="Search..." 
        style={{ 
          padding: '0.5rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          width: '100%'
        }}
      />
    </div>
  )
}

export default SearchComponent