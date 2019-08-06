import React, { Component } from 'react'
import TimerComponent from '../timer/timer.component';
import './main-layout.component.scss'
export default class MainLayoutComponent extends Component {
    render() {
        return (
            <div className="container">
                <TimerComponent />
            </div>
        )
    }
}
