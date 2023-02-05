import React from 'react'
import { MdOutlineCancel, MdOutlineClose } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data/dummy'
import { SiShopware } from 'react-icons/si'
import { useStateContext } from '../context/contextApi'

const Sidbar = () => {




  const { activeMinu, setactiveMinu, color } = useStateContext()

  const activeLink = 'p-3 hover:bg-gray-200 flex gap-5 items-center rounded-lg text-white text-md m-2'
  const nonactiveLink = 'p-3 hover:bg-gray-200 flex gap-3 items-center text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'





  return (
    <div className='ml-3 max-h-screen mt-2 overflow-hidden hover:overflow-auto z-40'>
      {activeMinu && <>
        <div className='flex justify-between items-center z-50'>
          <Link to="/" className="flex gap-3 items-center mt-4">
            <SiShopware color={color} /> <span className='font-bold text-2xl' style={{ color }}>SHOP</span>
          </Link>
          <TooltipComponent content="Close" position='BottomCenter'>
            <button type='button'
              className='rounded-full p-3 hover:bg-light-gray
                          mt-4 block text-xl'
              onClick={() => { setactiveMinu((pre) => !pre) }}>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <>
              <div key={item.title}>
                <h2 className='text-gray-400 uppercase mt-4'>{item.title}</h2>
                {item.links.map(link => (
                  <NavLink

                    style={({ isActive }) => isActive ? { backgroundColor: color } : null}

                    className={({ isActive }) => isActive ? activeLink : nonactiveLink}
                    to={`/${link.name}`}
                    onClick={() => { }}>
                    <span>{link.icon}</span> <h3>{link.name}</h3>
                  </NavLink>
                ))}
              </div>
            </>
          ))}
        </div>
      </>}
    </div>
  )
}

export default Sidbar