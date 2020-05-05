import React, { Component} from 'react'

// import ReactDom from 'react-dom'

import { render } from 'react-dom'

//1.定义组件的第一种方式---------函数  名字首字母要大写

// const App = (props) => {
//     return (
//         <div>
//             {/*只要在jsx中写js代码 就用花括号 */}
//             <h1 title={props.title}> hello {props.title} !!! </h1>
//             <p>完美的{props.title}</p>
//         </div>
//     )
// }
// render(
//     <App title='16.13' />,
//     document.querySelector('#root')
// )


//2.定义组件的第二种方式------class

// 在16以前的版本用React.createClass({
//     render () {

//     }
// })定义类组件

class App extends Component{
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

//类组件渲染的原理
// const app = new App({
//   title:'类组件是继承React.Component'
// }).render()
//下面的render就可以写app  ,因为必须是element


render(
    <App title='类组件是继承React.Component' />,
    document.querySelector('#root')
)