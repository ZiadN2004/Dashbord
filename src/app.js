import React from 'react'
import "./app.css"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { Navbar, Footer, Sidbar, ThemSetings } from './componenet'

import {
    Ecommerce, Orders, Calender, Employees, Stacked, Pyrimds, Customers, Kanban,
    Area, Bar, Pie, ColorMaping, ColorPicker, Editor, LineChart, Financial
} from './pages'
import { useStateContext } from './context/contextApi'


const App = () => {
    const { activeMinu, ActivSet, setActivSet, Mode, color } = useStateContext()
    // React.useEffect(() => {
    //     localStorage.setItem("color", "#1A97F5")
    // }, [])
    return (
        <div className={Mode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4'>
                        <TooltipComponent content="settings" position='top'>
                            <button
                                onClick={() => { setActivSet(true) }}
                                type='button'
                                className='z-50 p-3 hover:drop-shadow-xl text-white hover:bg-light-gray'
                                style={{ backgroundColor: color, borderRadius: "50%" }}>
                                <FiSettings className='text-3xl' />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMinu ? <div className='w-72 bg-main-bg dark:bg-main-dark-bg sidebar z-30'>
                        <Sidbar />
                    </div> : <div className='w-0 bg-main-bg dark:bg-main-dark-bg'>
                        <Sidbar />
                    </div>}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMinu ? 'md:ml-27' : "flex-2"}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>

                        {ActivSet && <ThemSetings />}
                        <Routes>
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />

                            {/* pages */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />


                            {/* Apps */}
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<Editor />} />
                            <Route path='/calendar' element={<Calender />} />
                            <Route path='/color-picker' element={<ColorPicker />} />
                            <Route path='/line' element={<LineChart />} />
                            <Route path='/area' element={<Area />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/financial' element={<Financial />} />
                            <Route path='/color-mapping' element={<ColorMaping />} />
                            <Route path='/pyramid' element={<Pyrimds />} />
                            <Route path='/stacked' element={<Stacked />} />


                        </Routes>
                    </div>
                </div>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App