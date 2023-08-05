import "./Navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Getting a Taxi</a>
        </li>
        <li>
          <a href="">Mobile App</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <img src="/images/header-icons.png" alt="" />
    </div>
  )
}

export default navbar