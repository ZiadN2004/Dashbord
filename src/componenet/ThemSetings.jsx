import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../context/contextApi'

const ThemSetings = () => {
  const Cheked = true
  const { setActivSet, setGlobalColor, setMode, color, Mode } = useStateContext()
  return (
    <div className='bg-half-transparent w-full fixed h-screen nav-item top-0 right-0'>
      <div className='float-right w-400 h-screen bg-white dark:bg-secondary-dark-bg'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-gray-400'>settings</h2>
          <TooltipComponent content={"close"} position='TopCenter'>
            <button
              onClick={() => { setActivSet(false) }}
              className='rounded-full text-2xl p-3 hover:bg-light-gray hover:drop-shadow-lg'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='border-t-1 border-color'>
          <h3 className='text-2xl m-4 font-semibold text-slate-900 dark:text-gray-400'>Mode</h3>
          <div className='m-5'>
            <div className='flex justify-start gap-3'>
              <input
                type="radio"
                value="Light"
                name='light'
                id='light'
                onChange={() => { setMode("Light") }}
                checked={Mode === "Light"} />
              <label className=" text-slate-900 dark:text-gray-400" htmlFor="light">Light</label>
            </div>
            <div className='flex justify-start gap-3'>
              <input
                type="radio"
                value="Dark"
                name='dark'
                id='dark'
                onChange={() => { setMode("Dark") }}
                checked={Mode === "Dark"} />
              <label className=" text-slate-900 dark:text-gray-400" htmlFor="dark">Dark</label>
            </div>
          </div>
        </div>
        <div className=' border-t-1 border-color'>
          <h3 className='text-2xl m-4 text-slate-900 dark:text-gray-400'>Theam Color</h3>
          <div className='m-5 flex gap-3 justify-center items-center'>
            {themeColors.map((i, n) => (
              <TooltipComponent content={i.name} key={n} >
                <button style={{ backgroundColor: i.color, width: "30px", height: '30px' }} onClick={() => { setGlobalColor(i.color) }} className='text-2xl rounded-full flex justify-center items-center'>
                  {color === i.color ? <BsCheck color='white' /> : null}
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemSetings