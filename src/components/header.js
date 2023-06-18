import * as React from "react"
import { Link } from "gatsby"

const navLinks = [
  { text: "home", url: "/", badge: false},
  { text: "TypeScript", url: "using-typescript" },
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="navInner">
        <div className="logo">
          <Link to="/">logo</Link>
        </div>
        <div className="menus">
          <div className="left">
            {/* {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))} */}
            <ul>
            {navLinks.map(link => (
              <li key={link.url}>
                <a href={`${link.url}`} >
                  {link.text} ↗
                </a>
              </li>
            ))}
          </ul>
          </div>
          <div className="right">right</div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
