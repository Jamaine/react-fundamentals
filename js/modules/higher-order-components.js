const React = require('react')
const ReactDOM = require('react-dom')

// Mixin takes parameter of InnerComponent
// returns a new component
// This is not a mixin as per the React spec, as you cannot use mixins with ES6 classes
let Mixin = InnerComponent => class extends React.Component {
  constructor () {
    super()
    this.state = {
      val:0
    }
    this.update = this.update.bind(this)
  }
  update () {
    this.setState({val:this.state.val + 1})
  }
  componentWillMount () {
    console.log('will mount')
  }
  render () {
    return (
      // the state and props seem to get merged into props
      // when generating a stateless component - possible issue?
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
      // {...state} just allows us to add any number of items - see spread operator
    )
  }
  componentDidMount () {
    console.log('component Mounted')
  }
}

// stateless components
const Button = (props) => <button
                          onClick={props.update}>
                          {props.txt} - {props.val}
                        </button>

const Label = (props) => <label
                          onMouseMove={props.update}>
                          {props.txt} - {props.val}
                        </label>

// When passed to Mixin() they return a component which inherets methods, props, state etc..
let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
  render () {
    return (
      <div>
        <ButtonMixed txt="Button" val="skinout"/>
        <LabelMixed txt="Label"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.react')
)
