var React = require('react');
var ReactDom = require('react-dom');

class App extends React.Component {
  render () {
    return (
      // <Heart/> and the text are children of Button
      <Button> <Heart/>blah di blah</Button>
    )
  }
}

class Button extends React.Component {
  render () {
    return (
      // props.children displays anything - text, elems, components
      // which are nested within this component
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <span className="some-heart">&#9829;</span>


ReactDom.render(
  <App/>,
  document.querySelector('.react')
)
