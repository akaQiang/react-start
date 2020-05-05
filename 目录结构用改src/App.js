import React, { Component,Fragment } from 'react'
import {Todo} from './components'
export default class App extends Component {
    render() {
        return (
            <Fragment>    
                <Todo />
            </Fragment>
        )
    }
    //空标签 <> </> 和Fragment作用相同
}
