## Fragment

Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。声明的片段可能具有 key。
还有一种新的短语法可用于声明它们。它不支持 key 或属性。
动机：组件返回一个子元素列表
```
    render() {
        return (
            <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
            </React.Fragment>
        );
    }

    // 短语法
    render() {
        return (
            <>
            <ChildA />
            <ChildB />
            <ChildC />
            </>
        );
    }
```
