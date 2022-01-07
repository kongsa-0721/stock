//一个模拟的flux 
import { dispatch } from './store'
//把action 抽离出去
import { action1, action2 } from './action';

const Ts3store = () => {
    const onminus = () => {
        dispatch(action2);
    }
    return (
        <div>
            <button type="button" onClick={() => dispatch(action1)}>+</button>
            <span id="pdd"></span>
            <button type="button" onClick={onminus}>-</button>
        </div>
    )
}

export default Ts3store
