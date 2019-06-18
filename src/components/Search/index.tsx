import React, { Component } from 'react'

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
  handleClick = () => {
    if (this.state.inputVal) {
      window.open(this.state.inputVal)
    }
  }
  handleChange(event: any) {
    this.setState({ inputVal: event.target.value })
  }
  render() {
    const { options } = this.props
    const { inputVal } = this.state
    const options_el = options.map(option => {
      return (
        <option
          key={option.value}
          title={option.title}
          value={option.value}
          label={option.label}
        />
      )
    })
    return (
      <div style={{ padding: '5px' }}>
        <input
          type='text'
          name='website'
          list='website'
          value={inputVal}
          style={{ width: '70%' }}
          onChange={e => this.handleChange(e)}
          ref={this.searchInput}
          placeholder='请输入网址or网址名'
        />
        <datalist id='website'>{options_el}</datalist>
        <button
          style={{ fontSize: '70%', marginLeft: '10px' }}
          className='el-button--primary'
          onClick={this.handleClick}
        >
          跳转
        </button>
      </div>
    )
  }
}

export default Search
