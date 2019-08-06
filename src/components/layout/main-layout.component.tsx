import React, { Component } from 'react'
import TimerComponent from '../timer/timer.component';
import './main-layout.component.scss'
import WorkSetterComponent from '../work-setter/work-setter.component';
export default class MainLayoutComponent extends Component {
    render() {
        return (
            <div className="container">
                <WorkSetterComponent />
                <TimerComponent />
            </div>
        )
    }
}
