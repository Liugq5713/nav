import React from 'react'

export interface SearchProps {
  options: Array<{ value: string; label: string; title?: string }>
}
const Search: React.FC<SearchProps> = props => {
  const { options } = props
  const options_el = options.map(option => {
    return <option value={option.value}>{option.label}</option>
  })
  const handleChange = (e: object) => {
    console.log('e', e, value)
  }
  let value = ''
  return (
    <div>
      <input type='text' name='city' list='cityname' />
      <datalist id='cityname'>{options_el}</datalist>
      {/* <select id='pet-select'>{options_el}</select>
      <input
        type='search'
        id='site-search'
        name='q'
        value={value}
        onChange={e => handleChange(e)}
        aria-label='Search through site content'
      />
      <button className=' pure-button pure-button-primary'>搜索</button> */}
    </div>
  )
}

export default Search
