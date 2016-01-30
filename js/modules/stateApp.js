const React = require('react');
const ReactDom = require('react-dom')

// Stateful component - it can have state
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      txt:'this is the state text'
    }
    this.update = this.update.bind(this)
  }
  update (e) {
    this.setState({txt: e.target.value})
  }
  render () {
    return (
      <div>
        <input
          onChange={this.update}
          type="text"/>
        <span>{this.state.txt}</span>
      </div>

    )
  }
}

ReactDom.render(
  <App/>,
  document.querySelector('.react')
)
