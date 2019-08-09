import React, { Component } from 'react'
import TimerComponent from '../timer/timer.component';
import './main-layout.component.scss'
import WorkSetterComponent from '../work-setter/work-setter.component';


export default class MainLayoutComponent extends Component<any, any, any> {
    state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            time: ''
        }
    }
    setTimeEvent = (ev: any): void => {
        this.setState({ time: ev.target.value });
        (this.refs.timerComponent as any).startTimer(ev.target.value)
    }

    render() {
        return (
            <div className="container">
                <WorkSetterComponent setTime={this.setTimeEvent} />
                <TimerComponent ref="timerComponent" time={this.state.time} />
            </div>
        )
    }
}
