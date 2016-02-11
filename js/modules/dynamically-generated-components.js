const React = require('react')
const ReactDOM = require('react-dom')
const DATA = require('./data.js')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data:DATA
    }
  }
  render () {
    let adventurers = this.state.data.map((adventurer,i) => {
      return <Item key={i} data={adventurer} />
    })
    return (
      <ul>
        {adventurers}
      </ul>
    )
  }
}

const Item = (props) => <li>{props.data.name}, {props.data.age}, {props.data.type}</li>

ReactDOM.render(
  <App/>,
  document.querySelector('.react')
)
