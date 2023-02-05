import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective, Inject } from '@syncfusion/ej2-react-kanban'

import { Header } from '../componenet'
import { kanbanData, kanbanGrid } from '../data/dummy'

const Kanban = () => {
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl dark:bg-secondary-dark-bg'>
      <Header cat="App" title="Kanpan" />
      <KanbanComponent
        allowDragAndDrop id='Kanban' keyField='Status' dataSource={kanbanData} cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee" }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban