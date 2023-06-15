import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import AreaChart from '../Charts/AreaChart'
//import HorizontalBarChart from '../Charts/HorizontalBarChart'
import LineChart from '../Charts/LineChart'
//import VerticalBarChart from '../Charts/VerticalBarChart'
import "./Charts.css";

const Charts = () => {
  return (
    <div className="charts">
      <div className='heading'>
        <h2>Patient Data Charts</h2>
        <FaChartLine className='icon'/>
      </div>
      
      <div>
        <LineChart/>
      </div>
      {/* <div>
        <HorizontalBarChart/>
      </div> */}
      <div>
        <AreaChart/>
      </div>
      {/* <div>
        <VerticalBarChart/>
      </div> */}
    </div>
  )
}

export default Charts