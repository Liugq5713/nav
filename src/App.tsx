import React from 'react'
import './App.css'
import Tool from '../src/components/Tool'
import ArrayLink from '../src/components/ArrayLink'
import { ReadLinks } from './data/links/read'
import { TutorialLinks } from './data/links/tutorial'
const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='pure-g'>
        <div className='pure-u-1-3'>
          <h2>阅读</h2>
          <ArrayLink links={ReadLinks} />
          <h2>教程</h2>
          <ArrayLink links={TutorialLinks} />
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
