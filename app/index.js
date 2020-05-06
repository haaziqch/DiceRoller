import React from 'react'
import ReactDOM from 'react-dom'
import DiceSelect from './components/DiceSelect'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Dice Roller</h1>
                <DiceSelect/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  )