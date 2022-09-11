import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 30
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1>{count}</h1>
      </div>
    )
  }
  // setInterval
  // clearInterval
  componentDidMount () {
    this.setState({
      count: 10
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}

export default Timer