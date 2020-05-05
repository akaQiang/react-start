import React, { Component,Fragment } from 'react'
import {TodoHeader,TodoInput} from './components'
export default class App extends Component {
    render() {
        return (
            <Fragment>    
                <TodoHeader title='props属性' x={1} y={2}>
                    children的意思
                </TodoHeader>
                <TodoInput btnText='ADD' />
            </Fragment>
        )
    }
    //空标签 <> </> 和Fragment作用相同
}
