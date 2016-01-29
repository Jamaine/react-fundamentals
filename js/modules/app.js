const React = require('react');
const ReactDom = require('react-dom')

// Stateful component - it can have state
class App extends React.Component {
  render () {
    let txt = this.props.txt;
    return (
      <h1>hello world!!!
        <span>{txt}</span>
      </h1>
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
