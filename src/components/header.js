import * as React from "react"
import { Link } from "gatsby"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="navInner">
        <div className="logo">
          <Link to="/" />
        </div>
        <div className="menus">
          <div className="left">
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))}
          </div>
          <div className="right">right</div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
