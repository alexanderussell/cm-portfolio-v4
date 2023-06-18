import * as React from "react"
import { Link } from "gatsby"


const Offering = () => (
  <article>
    image
    <label>label</label>
    <h2>Name</h2>
    <caption>1 week &dot; $5000</caption>
    <p>Align on business objectives and test key assumptions that must be true for your idea to succeed in the market.</p>
  </article>
)

const Offerings = () => (
  <div>
    <Offering />
  </div>
)

export default Offerings
