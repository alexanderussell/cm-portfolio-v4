import * as React from "react"
import { Link } from "gatsby"

const footerLinks = [
  { text: "home", url: "/", badge: false},
  { text: "TypeScript", url: "using-typescript" },
]

const Footer = () => (
  <footer className="">
    <a href="mailto:alex@collectivelymade.com" className="">hello@email.com</a>
    <p>&copy; 2023 Collectively Made</p>
    <div className="mt5">
      <a href="/terms/" title="Terms" class="">Terms of Use</a>
    </div>
  </footer>

)

export default Footer
