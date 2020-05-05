import React, { Component } from 'react'

import PropTypes from 'prop-types'


export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    //默认的props   
    static defaultProps = {
        btnText: '添加'
    }
    render() {
        return (
            <div>
                <input type='text'/><button>{this.props.btnText}</button>
            </div>
        )
    }
}

