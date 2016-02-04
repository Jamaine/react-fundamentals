// a wrapper component which adds and removes the component from the DOM
const React = require('react')
const ReactDOM = require('react-dom')
module.exports = class Wrapper extends React.Component {
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
    return (
      <div>
        <button onClick={this.mount}>mount</button>
        <button onClick={this.unmount}>unmount</button>
        <div className="app"></div>
      </div>
    )
  }
}
