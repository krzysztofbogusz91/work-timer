import React, { Component } from 'react'
import './work-setter.component.scss'

type SetterProps = {
    setTime: any;
}

export default class WorkSetterComponent extends Component<SetterProps> {
    state: any;
    time = "08:00:00"
    constructor(props: SetterProps) {
        super(props)

    }


    render() {
        return (
            <div className="setter">
                <form>
                    <label> Ustaw czas pracy:
                        <input type="text" name="data" value={this.time} />
                    </label>
                    <button value={this.time} onClick={this.props.setTime} type="button">Ustaw</button>
                </form>
            </div >
        )
    }
}
