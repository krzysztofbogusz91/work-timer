import React, { Component } from 'react'
import './timer.component.scss'

export default class TimerComponent extends Component {
    state: any;
    timerTick: any;
    constructor(props: any) {
        super(props)
        this.state = {
            date: new Date(),
            start: new Date(),
            difference: null,
            minutes: null,
            seconds: null
        }
    }
    componentDidMount() {
        this.timer(60 * 5)
        this.timerTick = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {

    }

    timer(duration: any) {
        const time = () => {
            this.setState({
                difference: duration - (((Date.now() - this.state.start) / 1000 | 0)),

            })
            this.setState({
                minutes: (this.state.difference / 60) | 0,
                seconds: (this.state.difference % 60) | 0,
            })
            this.setState({
                minutes: this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes,
                seconds: this.state.minutes < 10 ? "0" + this.state.seconds : this.state.seconds,
            })

            if (this.state.difference <= 0) {
                this.setState({ start: Date.now() + 1000 })
            }

        }
        time();
        setInterval(time, 1000)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="timer">
                <p>dif: {this.state.difference}</p>
                <p>min: {this.state.minutes}</p>
                <p>sec: {this.state.seconds}</p>
                <h2 style={{ fontSize: '40px' }}> Time:  {this.state.date.toLocaleTimeString()} </h2>
            </div >
        )
    }
}
