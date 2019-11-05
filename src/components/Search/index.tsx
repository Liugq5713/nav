import React, { Component } from "react"
import "./style.css"
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
    this.state = { inputVal: "" }
    this.searchInput = React.createRef()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
  }
  onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 70) {
      this.searchInput.current && this.searchInput.current.focus()
    }
    if (e.keyCode === 13) {
      this.skipToNewPage(this.state.inputVal)
    }
  }

  handleChange(event: any) {
    this.setState({ inputVal: event.target.value })
    this.skipToNewPage(event.target.value)
  }

  skipToNewPage(url = this.state.inputVal): void {
    console.log({ url })
    if (url && url.includes("https://")) {
      window.open(url, "_blank")
    }
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
      <div
        style={{
          textAlign: "center",
          paddingBottom: "10px",
          marginTop: "-40px"
        }}
      >
        <input
          type="text"
          name="website"
          list="website"
          value={inputVal}
          style={{ maxWidth: "600px" }}
          className="search--input"
          onChange={e => this.handleChange(e)}
          ref={this.searchInput}
          placeholder="请输入网址or网址名"
        />
        <datalist id="website">{options_el}</datalist>

        <button
          style={{ marginLeft: "15px", height: "45px" }}
          onClick={() => this.skipToNewPage()}
          className="pure-button pure-button-primary button-xlarge"
        >
          Enter 跳转
        </button>
      </div>
    )
  }
}

export default Search
