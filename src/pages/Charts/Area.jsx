import React from 'react'
import {
  ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective,
  Tooltip, DateTime, Legend, SplineAreaSeries
} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../componenet'
import { useStateContext } from '../../context/contextApi';

const Area = () => {
  const { Mode } = useStateContext()
  return (
    <div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl dark:bg-secondary-dark-bg'>
      <Header cat="Chart" title="Inflation Area" />
      <ChartComponent
        id="areacharts"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={Mode === 'Dark' ? '#33373E' : '#fff'}
        tooltip={{ enable: true }}>
        <Inject services={[DateTime, Tooltip, SplineAreaSeries, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((t, e) => (
            <SeriesDirective {...t} key={e} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>)
}

export default Area