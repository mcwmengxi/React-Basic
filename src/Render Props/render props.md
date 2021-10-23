## Render props
**如何向组件内部动态传入带内容的结构(标签)?**

提前在组件里预留一个洞
```
Vue中: 
	使用slot技术, 也就是通过组件标签体传入结构  <AA><BB/></AA>
React中:
	使用children props: 通过组件标签体传入结构
	使用render props: 通过组件标签属性传入结构, 一般用render函数属性
```

children props

```
    <A>
        <B >xxx</B>
    </A>
    class A中
        {this.props.children}
    问题: 如果B组件需要A组件内的数据, ==> 做不到 ===> render props
```

render props
```
    <A render={ (data) => { return <C data={data}>} }> 
    </A>
    A组件: {this.props.render(内部state数据)}
    C组件: 读取A组件传入的数据显示 {this.props.data} 
```

