import React from 'react'
import AnalogClock from './component/AnalogClock'
import DigitalClock from './component/DigitalClock'


const App = () => {
  return (
    <div className='Container' >
      <h1 className='heading' >React Clock</h1>
      <div className="clocks">
        <AnalogClock/>
        <DigitalClock/>
      </div>
    </div>
  )
}

export default App