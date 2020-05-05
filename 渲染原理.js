import React, { Component} from 'react'

import { render } from 'react-dom'

//表示虚拟dom树的方式

// const app = {
//     tag: 'div',
//     attrs:{
//         className : 'app',
//         id: 'appRoot'
//     },
//     children:[
//         {
//             tag: 'h1',
//             attrs:{
//                 className : 'title'
//             },
//             children:[
//                 '类组件'
//             ]
//         },
//         {
//             tag: 'p',
//             attrs:null,
//             children:[
//                 'JSX原理'
//             ]
//         }
//     ]
// }


//使用类的形式创建的组件，这是jsx的语法，但是不是合法的js代码

// class App extends Component{
//     render () {
//         return (
//             <div className='app' id='appRoot'>
//                 <h1>类组件</h1>
//                 <p>JSX原理</p>
//             </div>
//         )
//     }
// }


//所以react在真正渲染的时候会把上面的代码编译成下面这样子，是合法的js代码
class App extends Component{
    render () {
        return (
            //React.createElement是一个方法，用于创建元素，有很多的参数，但是前两个是固定的
            //第一个可以理解为标签名 第二个可以理解为标签的属性 剩下的是子元素
            //React.createElement(type,{props},[...children])
            React.createElement(
                'div',
                {
                    className : 'app',
                    id: 'appRoot'  
                },
                React.createElement(
                    'h1',
                    {
                        className : 'title'
                    },
                    '类组件'
                ),
                React.createElement(
                    'p',
                    null,
                    'JSX原理'
                )

            )
        )
    }
}

render(
    <App  />,
    document.querySelector('#root')
)

