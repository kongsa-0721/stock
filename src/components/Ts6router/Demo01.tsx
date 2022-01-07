import Ts1 from '../Ts1';
import Ts2 from '../Ts2'
import Ts3store from '../Ts3store';
import Ts4dux from '../Ts4dux';
import Ts5redux from '../Ts5redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Component } from 'react';

interface Iprops {
    match: string;
}
//匹配动态的路由
class Child extends Component<any, Iprops> {
    constructor(props: Iprops) {
        super(props);
    }
    render() {
        return <div className="">Child</div>;
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
}

const Ts6Demo01 = () => {
    return (
        <BrowserRouter>
            |<Link to="/ts1">ts1</Link>|<br />
            |<Link to="/ts2">ts2</Link>|<br />
            |<Link to="/ts3">ts3</Link>|<br />
            |<Link to="/ts4">ts4</Link>|<br />
            |<Link to="/ts5">ts5</Link>|<br />
            <Route path="/ts1" component={Ts1}></Route>
            <Route path="/ts2" component={Ts2}></Route>
            <Route path="/ts3" component={Ts3store}></Route>
            <Route path="/ts4" component={Ts4dux}></Route>
            <Route path="/ts5" component={Ts5redux}></Route>
            <Route path="/:id" component={Child}></Route>
        </BrowserRouter>
    )
}
export default Ts6Demo01

//这个组件会在面板中渲染出来其他五个组件