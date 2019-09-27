import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './App.css'
import Vancouver2 from './styles/images/Vancouver2.png'
import Vancouver1 from './styles/images/Vancouver1.png'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
    this.myRef = React.createRef()
    this.handleScrollToElement = this.handleScrollToElement.bind(this)
  }

  componentDidMount() {
  }

  handleScrollToElement() {
    window.scrollTo(0, this.myRef.current.offsetTop)
  }

  render() {
    return (
      <div className="App" style={{ scrollBehavior: 'smooth' }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" onClick={this.handleScrollToElement}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <img src={Vancouver2} alt="vancouver" style={{ display: 'flex', flex: 1, width: '100vw' }} />
        </div>
        <div>
          <img ref={this.myRef} src={Vancouver1} alt="vancouver" style={{ display: 'flex', flex: 1, width: '100vw' }} />
        </div>
      </div>
    )
  }
}

export default App
