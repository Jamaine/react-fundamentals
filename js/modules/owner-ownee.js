const React = require('react');
const ReactDom = require('react-dom')

// Stateful component - it can have state
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      txt:'this is the state text'
    }
    // Used here instead of in the onChange handler as a bind call
    // in the render path creates a brand new function on every single render
    // https://github.com/airbnb/javascript/tree/master/react
    this.update = this.update.bind(this)
  }
  update (e) {
    this.setState({txt: e.target.value})
  }
  render () {
    return (
      <Widget update={this.update} txt={this.state.txt} />
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input
        onChange={props.update} type="text"/>
      <span>{props.txt}</span>
    </div>
  )
}
ReactDom.render(
  <App/>,
  document.querySelector('.react')
)
