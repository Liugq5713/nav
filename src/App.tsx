import React from 'react'
import './App.css'
import Read from '../src/components/Read'
import Tutorial from '../src/components/Tutorial'
import Tool from '../src/components/Tool'

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='pure-g'>
        <div className='pure-u-1-3'>
          <h2>阅读</h2>
          <Read />
          <h2>教程</h2>
          <Tutorial />
        </div>
        <div className='pure-u-1-3'>
          <h1>工具</h1>
          <Tool />
        </div>
        <div className='pure-u-1-3'>
          <h1>个人</h1>
        </div>
      </div>
    </div>
  )
}

export default App
