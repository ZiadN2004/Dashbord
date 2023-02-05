import React from 'react'
import {
  ChartComponent, Inject, Legend, Category, SeriesCollectionDirective,
  SeriesDirective, StackingColumnSeries, Tooltip
} from '@syncfusion/ej2-react-charts'


import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/contextApi'

const Stacked = () => {
  const { Mode } = useStateContext()
  return (
    <ChartComponent
      background={Mode === 'Dark' ? '#33373E' : '#fff'}
      id='stacked-chart' width='100%' height='300px' chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: Mode === 'Dark' ? '#33373E' : '#fff', textStyle: "#fff" }}
      primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}>
      <Inject services={[Legend, Tooltip, Category, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, inedex) => (
          <SeriesDirective {...item} key={inedex} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked