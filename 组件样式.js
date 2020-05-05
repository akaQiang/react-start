import React, { Component} from 'react'

import { render } from 'react-dom'

import './index.css'

import classNames from 'classnames'

import styled from 'styled-components'

//组件的样式

const Title = styled.li`
    color:orange
`

class App extends Component{
    render () {
        const style = {color:'#f00'}
        return (
            <div className='app' id='appRoot'>
                <h1 style={style}>类组件</h1>
                <ol>
                    <li style={style}>行内样式</li>
                    <li className='text-color'>用class方式，但是在react中class要变成className</li>
                    <li className={classNames('a',{'b':true, 'c':false})}>第三方包classnames</li>
                    <Title>styled-components的使用</Title>
                </ol>
            </div>
        )
    }
}


render(
    <App  />,
    document.querySelector('#root')
)

