#### Grid Item Props

网格项的属性：

- **i: string**
   组件的key
- **x: number**
   横坐标
- **y: number**
   纵坐标
- **w: number**
   宽
- **h: number**
   高
- **minW: ?number = 0**
   最小宽度
- **maxW: ?number = Infinity**
   最大宽度
- **minH: ?number = 0**
   最小高度
- **maxH: ?number = Infinity**
   最大高度
- **static: ?boolean = false**
   为真时，项不可拖拽和缩放
- **isDraggable: ?boolean = true**
   是否可拖拽
- **isResizable: ?boolean = true**
   是否可缩放
- **resizeHandles?: ?Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'> = ['se']**
   设置重置大小的图标出现的位置，默认是在右下角
- **isBounded: ?boolean = false**
   是否设置边界（若为真且该项可被拖动，则该项只能在网格边界范围内拖动）

当一个元素被设置成为static时 可以设置横坐标，纵坐标

当不是static时 只可以设置横坐标



#### Grid Layout Props

```jsx
compactType={"horizontal"} verticalCompact={false}
这样设置 
```

RGL具有以下的属性：

- **width: number**
   设置宽度，使用了WidthProvider时不用设置
- **autoSize: ?boolean = true**
   为真时，容器的高度会自适应内容的高度
- **cols: ?number = 12**
   布局的列数
- **draggableCancel: ?string = ''**
   取消拖动时被拖动项的类选择器的名称
- **draggableHandle: ?string = ''**
   拖动时被拖动项的类选择器的名称
- **verticalCompact: ?boolean = true**
   为真时，布局在竖直方向上会紧凑排列
- **compactType: ?('vertical' | 'horizontal') = 'vertical'**
   紧凑排列类型
- **layout: ?array = null**
   布局数组，每一项是一个对象，形如：{i: string, x: number, y: number, w: number, h: number}，如果子组件不设置layout，需要在子组件中设置`data-grid`
- **margin: ?[number, number] = [10, 10]**
   项与项之间的间距，单位是px
- **containerPadding: ?[number, number] = margin**
   项的内边距
- **rowHeight: ?number = 150,**
   行高
- **droppingItem?: { i: string, w: number, h: number }**
   放置元素的配置（放置元素即是当你拖动某一项时出现的虚拟元素）
- **isDraggable: ?boolean = true**
   是否可拖拽
- **isResizable: ?boolean = true**
   是否可重置大小
- **isBounded: ?boolean = false**
   是否设置边界
- **useCSSTransforms: ?boolean = true**
   是否使用CSS 3 的translate() 来代替 position left/top（可加快渲染速度）
- **transformScale: ?number = 1**
   若ResponsiveReactGridLayout 或者 ReactGridLayout的父组件具有"transform: scale(n)"这一css属性，应该设置这一比例系数以避免拖拽时出现“伪影”
- **preventCollision: ?boolean = false**
   为真时，项在拖动时不会变更位置
- **isDroppable: ?boolean = false**
   为真时，设置了draggable={true}属性的项可以被放置入其他项
- **resizeHandles: ?Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'> = ['se']**
   设置重置大小的图标出现的位置，默认是在右下角
- **resizeHandle?: ReactElement<any> | ((resizeHandleAxis: ResizeHandleAxis) => ReactElement<any>)**
   自定义重置大小组件（即默认出现在右下角的那个小图标，可自定义）
- **onLayoutChange: (layout: Layout) => void**
   布局发生变化的回调函数
- **type ItemCallback = (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem, placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void**
   ItemCallback的类型
- **onDragStart: ItemCallback**
   某一项开始拖动的回调函数
- **onDrag: ItemCallback**
   某一项正在拖动中的回调函数
- **onDragStop: ItemCallback**
   某一项停止拖动的回调函数
- **onResizeStart: ItemCallback**
   某一项开始重置大小的回调函数
- **onResize: ItemCallback**
   某一项正在重置大小中的回调函数
- **onResizeStop: ItemCallback**
   某一项停止重置大小的回调函数
- **onDrop: (layout: Layout, item: ?LayoutItem, e: Event) => void**
   某一项所包含的内容中被放置其他元素后的回调函数
- **innerRef: ?React.Ref<"div">**
   网格的ref

#### Responsive Grid Layout Props 响应式

响应式RGL的特殊属性（除了以下属性的设置有所不同外，其他普通RGL具有的属性都可以设置）：

- **breakpoints: ?Object = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}**
   一个对象，其中每一项的名称都可以任意设置，只要它的值是数字并且可以与cols 和 layouts中一一对应即可。用以设置响应式布局的分割点
- **cols: ?Object = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}**
   一个对象，其中每一项的名称需与breakpoints中一一对应，用以设置布局的列数
- **margin: [number, number] | {[breakpoint: $Keys<breakpoints>]: [number, number]}**
   项与项之间边距的设置
- **containerPadding: [number, number] | {[breakpoint: $Keys<breakpoints>]: [number, number]}
   **
   项的内边距的设置
- **layouts: {[key: $Keys<breakpoints>]: Layout}**
   布局对象，其中每一项的名称需与breakpoints中一一对应
- **onBreakpointChange: (newBreakpoint: string, newCols: number) => void**
   breakpoint发生变更时的回调函数
- **onLayoutChange: (currentLayout: Layout, allLayouts: {[key: $Keys<breakpoints>]: Layout}) => void**
   布局发生变化的回调函数
- **onWidthChange: (containerWidth: number, margin: [number, number], cols: number, containerPadding: [number, number]) => void**
   宽度发生变化的回调函数

### 





To kongsa 组件优先级:

Button

Input 

Select 

CheckBox 

Radio 

Switch 

Table 

DatePicker 

Image 

Card 

部分组件可以选择不支持修改高度或宽度。

布局最好是放哪里就在哪里，但是不能出现页面缩放时候布局变化。
