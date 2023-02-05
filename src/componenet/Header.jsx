import React from 'react'

const Header = ({ cat, title }) => {
  return (
    <div className='pb-6'>
      <p className='text-gray-400'>
        {cat}
      </p>
      <p className='text-3xl text-slate-900 pl-1 font-semibold'>{title}</p>

    </div>
  )
}

export default Header