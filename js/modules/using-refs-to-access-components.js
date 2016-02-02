const React = require('react');
const ReactDom = require('react-dom');

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this);
  }
  update (e) {
    this.setState({
      // red:ReactDom.findDOMNode(this.refs.red).value,
      // the above line will work if the child component returned a single node
      red:ReactDom.findDOMNode(this.refs.red.refs.input).value,
      green:ReactDom.findDOMNode(this.refs.green.refs.input).value,
      blue:ReactDom.findDOMNode(this.refs.blue.refs.input).value
    })
    console.log(ReactDom.findDOMNode(this.refs.blue).value)
  }
  render () {
    return (
      <div>
        <Slider ref="red" update={this.update}/>
        <p>{this.state.red}</p>
        <Slider ref="green" update={this.update}/>
        <p>{this.state.green}</p>
        <Slider ref="blue" update={this.update}/>
        <p>{this.state.blue}</p>
      </div>
    )
  }
}
// Refs only work with Stateful components!
class Slider extends React.Component {
  render () {
    return (
      <div>
      {/*by specifying a ref on the input, we can reference a child element*/}
        <input ref="input" onChange={this.props.update}
          type="range"
          min="0"
          max="255"/>
      </div>
    )
  }
}

ReactDom.render(
  <App/>,
  document.querySelector('.react')
)
