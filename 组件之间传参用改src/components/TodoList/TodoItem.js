import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.title}
            </li>
        )
    }
}
