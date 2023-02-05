import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Stacked, Pie, Button, SparkLine } from '../componenet'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/contextApi'



const Ecommerce = () => {
  const { color } = useStateContext()
  return (
    <div className='mt-8'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-44 rounded-lg w-full lg:max-w-5xl p-8 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <h2 className='text-gray-400 font-bold'>Earning</h2>
          <p className='p-1 mb-2'>56.5645.56</p>
          <Button bgColor={color} color='white' content='BUtton' />
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-12 mx-4 lg:flex-nowrap'>
        {earningData.map(item => (
          <button type='button' className='p-5 rounded-lg flex flex-col items-center justify-center mt-5 bg-white dark:bg-secondary-dark-bg' >
            <span className='p-1 text-xl' style={{ background: item.iconBg, color: item.iconColor }}>{item.icon}</span>
            <p className='py-1 text-2xl font-semibold'>{item.amount} <span className='text-sm text-gray-300'>{item.percentage}</span></p>
            <p className='text-gray-500 font-semibold text-lg'>{item.title}</p>
          </button>
        ))}
      </div>

      <div className='mx-14 rounded-lg'>
        <div className='flex justify-between px-4 py-2 rounded-lg mt-4 bg-white dark:bg-secondary-dark-bg'>
          <p className='font-semibold font-2xl dark:text-gray-100'>Revenue Update</p>
          <div className='flex gap-3'>
            <span className='flex items-center dark:text-gray-100'><GoPrimitiveDot />Expense</span>
            <span className='text-green-500 flex items-center'><GoPrimitiveDot />Budget</span>
          </div>
        </div>



        <div className='flex flex-wrap justify-center md:justify-around'>
          <div className='bg-white rounded-lg p-5 my-5 w-80 text-center dark:bg-secondary-dark-bg'>
            <div className='m-5'>
              <p className='text-3xl font-semibold dark:text-gray-100:'>$39,156 <span className='text-sm text-white px-1 bg-green-600 rounded-full'>24%</span></p>
              <p className='text-gray-400 px-3 dark:text-gray-300'>Budget</p>
            </div>
            <div className='m-5'>
              <p className='text-3xl font-semibold dark:text-gray-100'>$39,156</p>
              <p className='text-gray-400 px-3 dark:text-gray-300'>Expence</p>
            </div>
            <div className="mt-5">
              <SparkLine />
            </div>
          </div>

          <div className='bg-white rounded-lg my-5 p-5 w-80 dark:bg-secondary-dark-bg'>
            <Stacked />
          </div>
        </div>

      </div>




    </div>
  )
}

export default Ecommerce