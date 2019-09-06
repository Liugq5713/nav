import React from "react"
import "./style.css"

const GithubCornor: React.FC = () => {
  return (
    <div className="cornor">
      <a href="https://github.com/Liugq5713/nav">
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </div>
  )
}

export default GithubCornor
