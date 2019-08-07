import React, { Component } from 'react'
import './timer.component.scss'

export default class TimerComponent extends Component {
    state: any;
    timerTick: any;
    constructor(props: any) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timerTick = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {

    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        const date = new Date();
        return (
            <div className="timer">
                <h2 style={{ fontSize: '40px' }}> Time:  {this.state.date.toLocaleTimeString()} </h2>
            </div >
        )
    }
}
