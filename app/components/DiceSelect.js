import React from 'react'
import PropTypes from 'prop-types'
import { FaDiceD20, FaDiceD6 } from 'react-icons/fa'

export default class DiceSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
            customDice : null,
            numOfDice: 1,
            diceString: null
        }
        this.RollDice = this.RollDice.bind(this)
        this.GetRndInteger = this.GetRndInteger.bind(this)
    }

    handleCustomDiceChange = (event) => {
		this.setState({
			customDice: event.target.value
		})
	}

    handleNumOfDiceChange = (event) => {
		this.setState({
			numOfDice: event.target.value
		})
	}

    RollDice(numOfDice,diceNum) {
        var total = 0
        var string = ''
        for(var i = 0; i < numOfDice; i++) {
            var diceRolled  = this.GetRndInteger(1,diceNum)
            total = total + diceRolled
            if(i == 0){
                string = diceRolled
            }
            if(i<numOfDice && i>0){
                string = string + ' + ' + diceRolled
            }
        }
        this.setState({
             result: total,
             diceString: string
             })
    }
    
    GetRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min
    }

    render(){
        const { customDice, numOfDice } = this.state
        return(
            <React.Fragment>
            Enter number of dice to roll: <input min={1} defaultValue={1} type='number' onChange={this.handleNumOfDiceChange}/>
                <ul>
                    <li>
                        <FaDiceD20 color="rgb(188,15,15)" size="22"/>
                        <button onClick={() => this.RollDice(numOfDice,20)}>Roll D20</button>
                    </li>
                    <li>
                        <FaDiceD20 color="rgb(188,15,15)" size="22"/>
                        <button onClick={() => this.RollDice(numOfDice,12)}>Roll D12</button>
                    </li>
                    <li>
                        <FaDiceD20 color="rgb(188,15,15)" size="22"/>
                        <button onClick={() => this.RollDice(numOfDice,8)}>Roll D8</button>
                    </li>
                    <li>
                        <FaDiceD6 color="rgb(188,15,15)" size="22"/>
                        <button onClick={() => this.RollDice(numOfDice,6)}>Roll D6</button>
                    </li>
                    <li>
                        <FaDiceD6 color="rgb(188,15,15)" size="22"/>
                        <button onClick={() => this.RollDice(numOfDice,4)}>Roll D4</button>
                    </li>
                    <li>
                        <FaDiceD20 color="rgb(188,15,15)" size="22"/>
                        <input placeholder='Enter custom dice value' type='number' onChange={this.handleCustomDiceChange} min={1}/>
                        <button onClick={() => this.RollDice(numOfDice,customDice)} disabled={!customDice ? true : false}>Roll Custom Dice</button>
                    </li>
                </ul>
                {this.state.diceString && <p>Dice Rolled: {this.state.diceString}</p> }
                {this.state.result && <p>Total Rolled: {this.state.result}</p> }
            </React.Fragment>
        )
    }
} 
