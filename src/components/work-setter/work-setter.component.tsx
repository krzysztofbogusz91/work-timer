import React, { Component } from 'react'
import './work-setter.component.scss'

export default class WorkSetterComponent extends Component {
    state: any;
    constructor(props: any) {
        super(props)

    }


    render() {
        return (
            <div className="setter">
                <form>
                    <label> Ustaw czas pracy:
                        <input type="text" name="data" value="08:00:00" />
                    </label>
                    <input type="submit" value="Ustaw" />
                </form>
            </div >
        )
    }
}
