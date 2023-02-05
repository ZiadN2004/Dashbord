import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../componenet'
import { useStateContext } from '../context/contextApi'
const ColorPicker = () => {
  const [crColor, setcrColor] = React.useState("red")
  const Change = (color) => {
    setcrColor(color.currentValue.hex)
    /* document.getElementById("preview").style.backgroundColor = crColor */
  }
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl  dark:bg-secondary-dark-bg'>
      <Header cat="App" title="ColorPicker" />

      <div className="text-center">
        <div id="preview" style={{ backgroundColor: crColor }} />

        <div className="flex justify-evenly">

          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pattle</p>
            <ColorPickerComponent
              id='inline-Picker'
              style={{ backgroundColor: Mode === 'Dark' ? '#33373E' : '#fff' }}
              mode='Palette'
              showButtons={false}
              inline
              modeSwitcher={false} change={Change}
              value={crColor} />
          </div>

          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline picker</p>
            <ColorPickerComponent
              style={{ backgroundColor: Mode === 'Dark' ? '#33373E' : '#fff' }}
              id='inline-Pallete'
              mode='Picker'
              showButtons={false}
              inline
              modeSwitcher={false} change={Change}
              value={crColor} />
          </div>

        </div>



      </div>

    </div>
  )
}

export default ColorPicker