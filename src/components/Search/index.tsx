import React, { Component } from 'react'
import './style.css'
import pig from './pig.svg'
interface SearchProps {
  options: Array<{ value: string; label: string; title?: string }>
}

interface SearchState {
  inputVal: string
}

class Search extends Component<SearchProps, SearchState> {
  private searchInput: React.RefObject<HTMLInputElement>
  constructor(props: any) {
    super(props)
    this.state = { inputVal: '' }
    this.searchInput = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }
  onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 70) {
      this.searchInput.current && this.searchInput.current.focus()
    }
    if (e.keyCode === 13) {
      if (this.state.inputVal) {
        window.open(this.state.inputVal)
      }
    }
  }

  handleChange(event: any) {
    this.setState({ inputVal: event.target.value })
    if (event.target.value && event.target.value.includes('https://')) {
      window.open(event.target.value, '_blank')
    }
  }
  render() {
    const { options } = this.props
    const { inputVal } = this.state
    const options_el = options.map(option => {
      return <option key={option.value} title={option.title} value={option.value} label={option.label} />
    })
    return (
      <div style={{ padding: '10px 5px' }}>
        <div className="search--logo">
          <img width="100px" src={pig} alt="logo" />
        </div>
        <h2>不要忘记别人还在奔跑</h2>
        <input
          type="text"
          name="website"
          list="website"
          value={inputVal}
          className="search--input"
          onChange={e => this.handleChange(e)}
          ref={this.searchInput}
          placeholder="请输入网址or网址名"
        />
        <datalist id="website">{options_el}</datalist>
      </div>
    )
  }
}

export default Search
