## pureComponent

**组件优化 ==> pureComponent**

### 组件优化
  组件优化的两个问题
  - 只要执行setState(),就会执行render()
  - 当某个组件执行render()，同时会触发子级组件的render()，就算子级组件没有用到父级组件的任何数据或数据没有发生改变，也会触发，导致效率低。

  Component中的shouldComponentUpdate()总是默认返回true

  解决方式：
  - 使用生命周期的shouldComponentUpdate(nextProps,nextState)方法检查通过返回true,false来确定组件是否更新
  ```
      shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState);
        console.log(this.props,this.state);
        if(nextProps.value===this.props.value){
            return false
        }
        return true
  ```

  - 当nextProps,nextState中要比较的值过多时，可以使用PureComponent
    PureComponent重写了shouldComponentUpdate()方法，只有检测到state，props发生变化才更新组件
    注意：
      - PureComponent只是对props和state数据进行浅比较，如果数据对象内部发生变化，检测不出来，返回的仍是false
        所以不要直接修改state，props，要使用新对象
        console.log(object===this.state,object);
        ![uTools_1634995364265](https://i.loli.net/2021/10/23/yZL9wdO4IMbP7GS.png)
```
            this.setState({
                componentname:"parentComponent-update"
            })

            // 虽然修改了state内部数据，但是PureComponent重写shouldComponentUpdate()方法进行的是浅比较，返回的是false,所以不进行组件更新
            const object=this.state
            object.componentname ="parentComponent-update"
            this.setState(object)
            console.log(object===this.state,object);
```

  - 项目中一般使用PureComponent来优化

