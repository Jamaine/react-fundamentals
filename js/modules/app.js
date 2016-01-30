const React = require('react');
const ReactDom = require('react-dom')

// Stateful component - it can have state
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      msg:'this is the state text'
    }
  }
  update (e) {
    this.setState({msg: e.target.value})
  }
  render () {
    let txt = this.props.txt;
    let msg = this.state.msg;
    return (
      <div>
        <h1>hello world!!!</h1>
        <input
          onChange={this.update.bind(this)} 
          type="text"/>
        <span>{txt}, {msg}</span>
      </div>

    )
  }
}
// setting propTypes
App.propTypes = {
  txt: React.PropTypes.string,
  // isRequired means the prop is required on the component
  cat: React.PropTypes.number.isRequired
}

// setting default props
//  if no prop or prop value has been supplied the default will be applied
App.defaultProps = {
    txt:'this is the default text'
}

ReactDom.render(
  // cat isRequired as set in the propTypes object and needs to be a number
  <App cat={5} txt="this is the props value"/>,
  document.querySelector('.react')
)
