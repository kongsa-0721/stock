import Ts1 from "./components/Ts1";
import Ts2 from "./components/Ts2";
import Ts3store from "./components/Ts3store";
import Ts4dux from "./components/Ts4dux";
import Ts5redux from "./components/Ts5redux";
import Ts6Demo01 from "./components/Ts6router/Demo01";
import Ts6Demo02 from "./components/Ts6router/Demo02";
import Ts7context from "./components/Ts7context";
import Ts8lazy from "./components/Ts8lazy";
import Ts9lifing from "./components/Ts9lifing";
import Gridlayout from "./Grid-layout";
import PopOver from "./AboutAntd/PopOver";

function App() {
  return (
    <div className="App">
      {/* <Ts1 msg="kongsa">
        <p>this is a react chileren</p>
      </Ts1>
      <Ts2 message="chundan "></Ts2>
      <Ts3store></Ts3store>
      <Ts4dux></Ts4dux>
      <Ts5redux></Ts5redux>
      <Ts7context></Ts7context>
      <Antdcomp></Antdcomp>
      <Ts7context></Ts7context>
      <Ts8lazy></Ts8lazy>
      <Ts9lifing></Ts9lifing> */}
      {/* <Gridlayout></Gridlayout> */}
      <Ts6Demo01></Ts6Demo01>
      <PopOver></PopOver>
      <Ts9lifing></Ts9lifing>
    </div>
  );
}

export default App;
