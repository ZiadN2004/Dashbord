import React from 'react'
import { scheduleData } from '../data/dummy'
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda,
  DragAndDrop, Inject, Resize
} from '@syncfusion/ej2-react-schedule'
import { Header } from '../componenet'
import { useStateContext } from '../context/contextApi'


const Calender = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white dark:bg-secondary-dark-bg'>
      <Header cat="App" title="Calender" />

      <ScheduleComponent
        style={{ background: Mode === 'Dark' ? '#33373E' : '#fff' }}
        eventSettings={{ dataSource: scheduleData }} height="650px">
        <Inject services={[Day, Week, WorkWeek, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender