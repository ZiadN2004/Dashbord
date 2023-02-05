import React from 'react'
import { Header } from '../componenet'
import { HtmlEditor, Image, RichTextEditorComponent, Toolbar, Inject, Link, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor'
import { useStateContext } from '../context/contextApi'


const Editor = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl  dark:bg-secondary-dark-bg'>
      <Header cat="App" title="Editor" />
      <RichTextEditorComponent
        background={Mode === 'Dark' ? '#33373E' : '#fff'}>

        <Inject services={[HtmlEditor, Image, Toolbar, Link, QuickToolbar]} />

      </RichTextEditorComponent>

    </div>
  )
}

export default Editor