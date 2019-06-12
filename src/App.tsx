import React from 'react'
import './App.css'
import ArrayLink from '../src/components/ArrayLink'
import ObjectLink from '../src/components/ObjectLink'
import GithubCorner from '../src/components/GithubCorner'
import { ReadLinks } from './data/links/read'
import { TutorialLinks } from './data/links/tutorial'
import {
  BookLinks,
  GitLinks,
  WebpackLinks,
  CssLinks,
  GithubLinks
} from './data/links/book'
// import { SelfLinks } from './data/links/self'
import { ToolLinks } from './data/links/tool'
const App: React.FC = () => {
  return (
    <div className='App'>
      <GithubCorner />
      <div className='pure-g'>
        <div className='pure-u-1  pure-u-sm-1-2 pure-u-md-1-3 pure-u-xl-1-3'>
          <ArrayLink title='阅读' links={ReadLinks} />
          <ArrayLink title='教程' links={TutorialLinks} />
        </div>
        <div className='pure-u-1  pure-u-sm-1-2 pure-u-md-1-3 pure-u-xl-1-3'>
          <h1>工具</h1>
          <ObjectLink links={ToolLinks} />
        </div>
        <div className='pure-u-1  pure-u-sm-1-2 pure-u-md-1-3 pure-u-xl-1-3'>
          <ArrayLink title='收集' links={BookLinks} />
          <ArrayLink title='Git' links={GitLinks} />
          <ArrayLink title='Webpack' links={WebpackLinks} />
          <ArrayLink title='CSS' links={CssLinks} />
          <ArrayLink title='Github' links={GithubLinks} />
        </div>
      </div>
    </div>
  )
}

export default App
