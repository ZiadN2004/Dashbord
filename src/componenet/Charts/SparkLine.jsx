import React from 'react'
import { SparklineComponent, SparklineTooltip, Inject } from '@syncfusion/ej2-react-charts'
import { SparklineAreaData } from '../../data/dummy'
import { useStateContext } from '../../context/contextApi'

const SparkLine = () => {
  const { Mode, color } = useStateContext()
  return (
    <SparklineComponent
      background={Mode === 'Dark' ? '#33373E' : '#fff'}
      id='sparkline' height='80px' width='100%' tooltipSettings={{
        visible: true, format: '${xval} : ${yval}',
      }} dataSource={SparklineAreaData} xName='xval' yName='yval' fill={color} border={{ color: color, width: 1 }}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )

}
export default SparkLine