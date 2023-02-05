import React from 'react'

const Button = ({ bgColor, color, content, size, borderRadius, Action }) => {
  return (
    <button
      onClick={Action} className={`
      p-2 w-fit cursor-pointer hover:drop-shadow-xl text-blue-50 dark:text-gray-700 text-${size}`} style={{ background: bgColor, color, borderRadius: borderRadius }}>
      {content}
    </button>
  )
}

export default Button