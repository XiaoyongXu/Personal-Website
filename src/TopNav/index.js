import React, { useState } from 'react'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import PropTypes from 'prop-types'

const TopNav = (props) => {
  const { handleScrollToElement } = props
  const [change, setChange] = useState(false)
  const changePosition = 300

  const position = useWindowScrollPosition()
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true)
  }

  if (position.y <= changePosition && change) {
    setChange(false)
  }

  const style = {
    backgroundColor: change ? 'white' : 'transparent',
    transition: '400ms ease',
    height: '50px',
    position: 'fixed',
    padding: '10px 100px',
    right: 0,
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
  }

  const textStyle = {
    all: 'unset',
    color: change ? 'black' : 'white',
    fontFamily: 'Helvetica Neue',
  }

  return (
    <div style={style}>
      <button type="button" style={textStyle} onClick={handleScrollToElement}>
        Xiaoyong Xu
      </button>
      <div>
        <button type="button" style={textStyle}>
          test
        </button>
      </div>
    </div>
  )
}

TopNav.propTypes = {
  handleScrollToElement: PropTypes.any,
}

TopNav.defaultProps = {
  handleScrollToElement: () => {},
}

export default TopNav
