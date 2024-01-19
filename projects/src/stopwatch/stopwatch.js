import React, {Component} from 'react'
import './stopwatch.css'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            number: 0,
            btn: 'Go'
        }

    this.timer = null // null -> is not running
    this.go = this.go.bind(this)
    this.clear = this.clear.bind(this)
    }

    go(){
        let state = this.state
        if (this.timer !== null) {
            // clearInterval -> method to stop a timer set with the setInterval
            clearInterval(this.timer)
            this.timer = null
            state.btn = 'Go'
        } else {
            this.timer = setInterval(() => {
            let state = this.state
            state.number += 0.1
            this.setState(state)
            }, 100)
            state.btn = 'Stop'
        }
        // updating the state
        this.setState(state)

    }
    clear(){
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
        } 
        let state = this.state
        state.number = 0
        state.btn = 'Go' // returning the 'button go' state
        this.setState(state) // updating the state
    }

    render(){
        return(
            <div className="container">
                <div className="stopwatch">
                    {/* toFixed () -> number of fixed decimal places */}
                    <a class="timer">{this.state.number.toFixed(2)}</a>
                        <div class="container-btn">
                            <button className="btn btnGo" onClick={this.go}>{this.state.btn}</button>
                            <button className="btn btnClear" onClick={this.clear}>Clear</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default App