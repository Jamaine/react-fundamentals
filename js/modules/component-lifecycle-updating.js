const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component {
  constructor () {
    super()
    this.update = this.update.bind(this)
    this.state = {increasing:false}
  }
  update () {
    // rerender the App, incrementing the props
    ReactDOM.render(
      <App val={this.props.val + 1}/>,
      document.querySelector('.react')
    )
  }
  // invoked before render, when a component is receiving new props
  // takes in the next properties which will be passed into the component
  // Use this as an opportunity to react to a prop transition before render()
  // is called by updating the state using this.setState(). The old props can be accessed via this.props.
  // Calling this.setState() within this function will not trigger an additional render.
  // https://facebook.github.io/react/docs/component-specs.html
  componentWillReceiveProps (nextProps){
    console.log('next props',nextProps, this.props)
    // if nextProps.val > this.props.val increasing = true
    this.setState({increasing:nextProps.val > this.props.val})
  }
  // invoked before rendering when new props or state are being received
  // not called on initial render or under forceUpdate
  // Used for optimisation - when we do NOT want the component to update
  // it should return false
  // https://facebook.github.io/react/docs/component-specs.html
  shouldComponentUpdate (nextProps, nextState) {
    // if next props is not divisible by 5, we do not update
    return nextProps.val % 5 === 0
  }
  render () {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update}>
        {this.props.val}
      </button>
    )
  }
  // Invoked immediately after the components updates have been flushed to the DOM
  // not called on initial render
  // takes prevProps and prevState, even if the component didnt update, as state and prevProps
  // can update regardless of whether we have told the component to
  // https://facebook.github.io/react/docs/component-specs.html
  componentDidUpdate (prevProps, prevState) {
    console.log('prevProps', prevProps)
  }
}

App.defaultProps = {
  val:0
}

ReactDOM.render(
  <App/>,
  document.querySelector('.react')
)
