## Context
**一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信**
通过将借助后代组件间共有的祖先组件来实现跨组件通信

1.创建Context 对象
```
    const MyContext = React.createContext() //可接收defaultValue
```
2.MyContext.Provider 
```
    <MyContext.Provider value={/* 某个值 */}>
```
3.消费组件
```
    //第一种方式:仅适用于类组件
    class组件：Class.contextType | public class fields 语法
    class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
            let value = this.context;
            /* 基于这个值进行渲染工作 */
        }
    }
    // MyClass.contextType = MyContext;

    //第二种方式: 函数组件与类组件都可以
    函数组件：Context.Consumer 
    <MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
    </MyContext.Consumer>
```

4.Context.displayName
    deveTools中显示的节点名称

5.在应用开发中一般不用context, 但使用的react组件通信插件一般都会基于它封装