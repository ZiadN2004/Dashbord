import React from 'react'

import { ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, Tooltip, Category, Legend, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../componenet'
import { useStateContext } from '../../context/contextApi';

const Bar = () => {
  const { Mode } = useStateContext()
  return (<div className='p-2 m-2 md:p-10 md:m-10 bg-white rounded-xl dark:bg-secondary-dark-bg'>
    <Header cat="Bar" title="Olympic Medal Counts - RIO" />

    <ChartComponent id="bar-charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      background={Mode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>

        {barCustomSeries.map((t, e) => <SeriesDirective {...t} key={e} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>)
}

export default Bar


// import React from 'react';
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

// import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
// import { Header } from '../../componenet';
// const Bar = () => {

//   return (
//     <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
//       <Header category="Bar" title="Olympic Medal Counts - RIO" />
//       <div className=" w-full">
//         <ChartComponent
//           id="charts"
//           primaryXAxis={barPrimaryXAxis}
//           primaryYAxis={barPrimaryYAxis}
//           chartArea={{ border: { width: 0 } }}
//           tooltip={{ enable: true }}
//         >
//           <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
//           <SeriesCollectionDirective>
//             {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
//           </SeriesCollectionDirective>
//         </ChartComponent>
//       </div>
//     </div>
//   );
// };

// export default Bar;