import React, { useState } from 'react'
import {
  ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective,
  Tooltip, LineSeries, DateTime, Legend
} from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { Header } from '../../componenet'
import { useStateContext } from '../../context/contextApi';

const LineChart = () => {
  const { Mode } = useStateContext()
  return (<div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl  dark:bg-secondary-dark-bg'>
    <Header cat="Chart" title="Inflation Rate" />
    <ChartComponent id="charts"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      background={Mode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}>
      <Inject services={[DateTime, Tooltip, LineSeries, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((t, e) => (
          <SeriesDirective {...t} key={e} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>)
}

export default LineChart