import React from 'react';

import { Header, Stacked as StackedChart } from '../../componenet';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header cat="Stacked" title="Revenue Breakdown" />
    <div className="w-full dark:bg-secondary-dark-bg">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;