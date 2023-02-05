import React from 'react'
import {
  GridComponent, ColumnDirective, ColumnsDirective, Inject, Resize, Sort, ContextMenu, Filter,
  ExcelExport, PdfExport, Edit, Page
} from '@syncfusion/ej2-react-grids'
import { Header } from '../componenet'
import { ordersGrid, ordersData } from '../data/dummy'
import { useStateContext } from '../context/contextApi'

const Orders = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white dark:bg-secondary-dark-bg'>
      <Header cat="Page" title="Orders" />
      <GridComponent dataSource={ordersData}
        background={Mode === 'Dark' ? '#33373E' : '#fff'}
        id="orders"
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective {...item} key={index} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, ExcelExport, PdfExport, Edit, Page]} />
      </GridComponent>
    </div>
  )
}

export default Orders