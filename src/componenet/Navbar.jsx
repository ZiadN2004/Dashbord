import React from 'react'
import { RiNotification3Fill } from 'react-icons/ri'
import { BsChatLeft } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/contextApi'
import avatar from '../data/avatar.jpg'
import { Chat, Cart, Notification, Userprofile } from '.'


const Navbar = () => {
  const { activeMinu, setactiveMinu, handleOpened, clik, color, size, setsize } = useStateContext()
  const initIcon = ({ dotColor, color, icon, title, custFunc }) => (
    <TooltipComponent position='TopCenter' content={title}>
      <button onClick={custFunc} className='relative text-xl cursor-pointer hover:bg-light-gray rounded-lg' style={{ color }}>
        <span className='absolute p-2 rounded-full' style={{ background: dotColor, right: "10px", top: "-10px" }}></span>
        {icon}
      </button>
    </TooltipComponent>
  )


  React.useEffect(() => {
    const handleSize = () => {
      setsize(window.innerWidth)
    }
    handleSize()

    window.addEventListener("resize", handleSize)
  }, [])

  React.useEffect(() => {
    if (size <= 900) {
      setactiveMinu(false)
    } else {
      setactiveMinu(true)
    }
  }, [size])


  return (<div className="flex justify-between px-4 lg:px-10 bg-white w-full py-3 dark:bg-secondary-dark-bg">
    <div>
      {initIcon({ color: color, icon: <AiOutlineMenu />, title: "menue", custFunc: () => { setactiveMinu((per => !per)) } })}
    </div>
    <div className='flex gap-3'>
      {initIcon({ dotColor: "red", color: color, icon: <BsChatLeft />, title: "Chat", custFunc: () => handleOpened("chat") })}
      {initIcon({ dotColor: "red", color: color, icon: <FiShoppingCart />, title: "Shopping", custFunc: () => handleOpened("Shoping") })}
      {initIcon({ dotColor: "red", color: color, icon: <RiNotification3Fill />, title: "Notification", custFunc: () => handleOpened("Notification") })}
      {initIcon({ color: color, icon: <MdKeyboardArrowDown />, title: "more", custFunc: () => handleOpened("more") })}
      <TooltipComponent>
        <button className='flex gap-2 items-center hover:bg-light-gray cursor-pointer rounded-lg' onClick={() => handleOpened("profile")}>
          <img src={avatar} style={{ width: "30px", }} className='rounded-full' /> <p className='text-lg'>hello , <span className='font-extrabold'>Ziad</span></p>
        </button>
      </TooltipComponent>
      {clik.chat && <>
        <Chat />
      </>}
      {clik.Notification && <>
        <Notification />
      </>}
      {clik.profile && <>
        <Userprofile />
      </>}
      {clik.Shoping && <>
        <Cart />
      </>}
      {clik.more && <>
        <h2>more</h2>
      </>}
    </div>
  </div>)
}

export default Navbar