const React = require('react');
const ReactDOM = require('react-dom')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      blue:0
    }
    this.update = this.update.bind(this)
  }
  update (e) {
    this.setState({
      blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value})
  }
  render () {
    return (
      <div>
        <NumInput
          ref="blue"
          min={0}
          max={255}
          step={1}
          val={+this.state.blue}
          label="Blue Input"
          type="number"
          update={this.update} />
      </div>
    )
  }
}
// A component, which can be either a range input or number input
// simply change the prop "type" to specify
class NumInput extends React.Component {
  render() {
    // If we specify a label in props, render a label
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : ''
    return (
      <div>
        <input
          ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}/>
        {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min:React.PropTypes.number,
  max:React.PropTypes.number,
  step:React.PropTypes.number,
  val:React.PropTypes.number,
  label:React.PropTypes.string,
  update:React.PropTypes.func.isRequired,
  // by using the oneOf method, we can specify an array of options
  type:React.PropTypes.oneOf(['number','range'])
}

NumInput.defaultProps = {
  min:0,
  max:0,
  step:0,
  val:0,
  label:'',
  type:'range'
}

ReactDOM.render(
  <App/>,
  document.querySelector('.react')
)
