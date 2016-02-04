const React = require('react');
const ReactDom = require('react-dom');

class App extends React.Component {
  constructor () {
    super();
    this.state = {val:0}
    this.update = this.update.bind(this);
  }
  update () {
    this.setState({val: this.state.val +1})
  }
  // component is fully prepped and guaranteed to make it into the DOM
  // only called once
  componentWillMount () {
    console.log('mounting')
  }
  // called after our component is placed into the DOM
  // only called once
  componentDidMount () {
    console.log('mounted')
  }
  // called when we are about to remove our component from the DOM
  componentWillUnmount () {
    console.log('bye')
  }
  render () {
    console.log('rendering')
    return <button onClick={this.update}>{this.state.val}</button>
  }
}

// a wrapper component which adds and removes the component from the DOM
class Wrapper extends React.Component {
  constructor () {
    super()
  }
  mount () {
    ReactDom.render(<App/>, document.querySelector('.app'))
  }
  unmount () {
    ReactDom.unmountComponentAtNode(document.querySelector('.app'))
  }
  render () {
    return (
      <div>
        <button onClick={this.mount}>mount</button>
        <button onClick={this.unmount}>unmount</button>
        <div className="app"></div>
      </div>
    )
  }
}

ReactDom.render(
  <Wrapper/>,
  document.querySelector('.react')
)
