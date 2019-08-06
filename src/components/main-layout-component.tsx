import React, { Component } from 'react'

export default class MainLayoutComponent extends React.Component {
    render() {
        const name = 'Chris'
        console.log(this.props);

        return (
            <div>
                Hello {(this.props as any).name}
            </div>
        )
    }
}
