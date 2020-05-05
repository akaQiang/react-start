import React, { Component,Fragment } from 'react'
import {TodoHeader,TodoInput,TodoList} from './components'
export default class App extends Component {
    // state = {
    //     title: 'state是啥'
    // }

    constructor(){
        super()
        this.state = {
            title: 'state是啥啊',
            artical:'<p>dangerouslySetInnerHTML</p>',
            todos:[
                {
                    id:1,
                    title:'吃饭',
                    isCompleted: true
                },
                {
                    id:2,
                    title:'睡觉',
                    isCompleted: false
                }
            ]
        }
    }
    render() {
        return (
            <Fragment>    
                {/* 渲染方式一 */}
                {/* {
                    this.state.todos.map(todo =>{
                        return <div key={todo.id}>{todo.title}</div>
                    })
                } */}

                {/* 渲染二 */}
                {
                    // <div dangerouslySetInnerHTML={{__html: this.state.artical}} />
                }
                <TodoHeader title='props属性' x={1} y={2}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput btnText='ADD' />
                <TodoList todos={this.state.todos} />
            </Fragment>
        )
    }
    //空标签 <> </> 和Fragment作用相同
}
