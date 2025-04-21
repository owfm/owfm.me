import React from 'react'

const dotSize = 10

const FlashingGreenDot: React.FC = () => (
  <span
    style={{
      display: 'inline-block',
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      backgroundColor: 'limegreen',
      marginRight: 8,
      animation: 'flashing-green-dot 1s infinite alternate',
      verticalAlign: 'middle',
    }}
  />
)

export default FlashingGreenDot
