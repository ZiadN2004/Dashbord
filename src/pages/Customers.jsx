import React from 'react'
import {
  GridComponent, ColumnDirective, ColumnsDirective, Inject
  , Sort, Filter, Edit, Page, Toolbar, Search, Selection
} from '@syncfusion/ej2-react-grids'
import { Header } from '../componenet'
import { customersGrid, customersData } from '../data/dummy'
import { useStateContext } from '../context/contextApi'

const Customers = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10'>
      <Header cat="Page" title="Customers" />
      <GridComponent dataSource={customersData}
        id="customers"
        allowPaging
        allowSorting
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={['Delete']}
        background={Mode === 'Dark' ? '#33373E' : '#fff'}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective {...item} key={index} />
          ))}
        </ColumnsDirective>
        <Inject services={[Filter, Sort, Filter, Toolbar, Search, Edit, Page, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers