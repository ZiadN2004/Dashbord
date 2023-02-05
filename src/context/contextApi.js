import React, { useState } from "react";
import { createContext, useContext } from "react";

export const stateContext = createContext();



export const ContextProvider = ({ children }) => {
    const [activeMinu, setactiveMinu] = useState(true)

    const initialState = {
        "chat": false,
        "Notification": false,
        "Shoping": false,
        "profile": false,
        "more": false
    }

    const [clik, setClic] = React.useState(initialState)
    const [ActivSet, setActivSet] = React.useState(false)



    const handleOpened = (par) => {
        setClic({ ...initialState, [par]: true })
    }
    const handleClosed = (par) => {
        setClic({ ...initialState, [par]: false })
    }

    const [color, setcolor] = useState("#1A97F5")

    const setGlobalColor = (e) => {

        setcolor(e)
        localStorage.setItem("color", color)
        setActivSet(false)
    }

    const [size, setsize] = useState(undefined)


    const [Mode, setMode] = useState("Light")

    const setGlobalMode = (e) => {
        setMode(e.target.value)
        localStorage.setItem("mode", Mode)
        setActivSet(false)
    }


    return (
        <stateContext.Provider
            value={{
                activeMinu, setactiveMinu, handleOpened, clik, ActivSet, setActivSet,
                setGlobalColor, setGlobalMode, size, setsize, Mode, setMode, color, handleClosed
            }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)