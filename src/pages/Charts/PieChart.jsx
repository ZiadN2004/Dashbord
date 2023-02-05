import React from 'react'

import { Inject, AccumulationChartComponent, PieSeries, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { Header } from '../../componenet'
import { useStateContext } from '../../context/contextApi';

const Pie = () => {
  const { Mode } = useStateContext()
  return (<div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl dark:bg-secondary-dark-bg'>
    <Header cat="Chart" title="Project Cost Breakdown" />

    <AccumulationChartComponent
      id="pie-chart"
      background={Mode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: Mode === 'Dark' ? '#33373E' : '#fff', textStyle: "#fff" }}
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          dataLabel={{ visible: true, name: "text", font: { fontWeight: "600", color: "#fff" } }}
          xName='x'
          yName='y'
          radius='70%'
          explode
          explodeOffset="10%" />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  </div>)
}

export default Pie



