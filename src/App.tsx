import React from 'react'
import './App.css'
import ArrayLink from '../src/components/ArrayLink'
import ObjectLink from '../src/components/ObjectLink'
import GithubCorner from '../src/components/GithubCorner'
import { ReadLinks } from './data/links/read'
import { TutorialLinks } from './data/links/tutorial'
// import { SelfLinks } from './data/links/self'
import { ToolLinks } from './data/links/tool'
const App: React.FC = () => {
  return (
    <div className='App'>
      <GithubCorner />
      <div className='pure-g'>
        <div className='pure-u-1-2'>
          <h2>阅读</h2>
          <ArrayLink links={ReadLinks} />
          <h2>教程</h2>
          <ArrayLink links={TutorialLinks} />
        </div>
        <div className='pure-u-1-2'>
          <h1>工具</h1>
          <ObjectLink links={ToolLinks} />
        </div>
        {/* <div className='pure-u-1-3'>
          <h1>个人</h1>
          <ArrayLink links={SelfLinks} />
        </div> */}
      </div>
    </div>
  )
}

export default App
