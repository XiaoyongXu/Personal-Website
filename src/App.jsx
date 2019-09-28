import React from 'react'
import './App.css'
import Wedding from './styles/images/wedding.jpg'
import Wedding2 from './styles/images/wedding.png'
import TopNav from './TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
    this.myRef = React.createRef()
  }

  componentDidMount() {
  }

  handleScrollToElement = () => {
    window.scrollTo({ top: this.myRef.current.offsetTop, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="App">
        <TopNav handleScrollToElement={this.handleScrollToElement} />
        <div>
          <img src={Wedding2} alt="vancouver" style={{ display: 'flex', flex: 1, width: '100vw' }} />
        </div>
        <div>
          <img ref={this.myRef} src={Wedding} alt="vancouver" style={{ display: 'flex', flex: 1, width: '100vw' }} />
        </div>
      </div>
    )
  }
}

export default App
