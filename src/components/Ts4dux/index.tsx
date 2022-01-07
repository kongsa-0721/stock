import React from "react";
import { store } from "./store";
import { action1, action2 } from "./actions";

const Ts4dux = () => {
  //仅仅这样还是不够的 因为视图层还没有变化
  const handeladd = () => {
    store.dispatch(action1);
  };
  const handelminus = () => {
    store.dispatch(action2);
  };
  return (
    <div>
      <button onClick={handeladd}>+++</button>
      <span>{store.getState().count}</span>
      <button onClick={handelminus}>---</button>
    </div>
  );
};

export default Ts4dux;

{
  /**

    redux是独立于react的 reat不管你

    在main.tsx里面进行subscribe
    function render(){
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        document.getElementById('root')
        )
    }
    store.subscribe(render);

    render();

*/
}
