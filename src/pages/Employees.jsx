import React from 'react'
import {
  GridComponent, ColumnDirective, ColumnsDirective, Inject, Resize, Page, Search, Toolbar
} from '@syncfusion/ej2-react-grids'
import { Header } from '../componenet'
import { employeesGrid, employeesData } from '../data/dummy'
import { useStateContext } from '../context/contextApi'

const Employees = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white dark:bg-secondary-dark-bg'>
      <Header cat="Page" title="Employees" />
      <GridComponent dataSource={employeesData}
        background={Mode === 'Dark' ? '#33373E' : '#fff'}
        id="employees"
        allowPaging
        toolbar={['Search']}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective {...item} key={index} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Search, Toolbar, Page]} />
      </GridComponent>
    </div>
  )
}

export default Employees