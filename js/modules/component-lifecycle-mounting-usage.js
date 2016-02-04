const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor () {
    super()
    this.state = {val:0}
    this.update = this.update.bind(this)
  }
  componentWillMount () {
    this.setState({
      // if we uncomment val, this.state.val will be 2 when the render method is called
      // val:2,
      multiple:2
    })
  }
  componentDidMount () {
    // Here we have access to the DOM, this will not work using componentWillMount
    console.log(ReactDOM.findDOMNode(this))
    // set an interval which calls update every 500ms and assign to a property
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount () {
    // when the component unmounts, we clear the interval and stop the function setting state
    // on unmounted component
    clearInterval(this.inc)
  }
  update () {
    this.setState({val:this.state.val + 1})
  }
  render () {
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.multiple}
      </button>
    )
  }
}

class Wrapper extends React.Component {
  constructor () {
    super()
  }
  mount () {
    ReactDOM.render(<App/>, document.querySelector('.app'))
  }
  unmount () {
    ReactDOM.unmountComponentAtNode(document.querySelector('.app'))
  }
  render () {
    return(
      <div>
        <button onClick={this.mount}>mount</button>
        <button onClick={this.unmount}>unmount</button>
        <div className="app"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Wrapper/>,
  document.querySelector('.react')
)
