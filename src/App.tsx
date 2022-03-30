import Ts1 from "./components/Ts1";
import Ts2 from "./components/Ts2";
import Ts3store from "./components/Ts3store";
import Ts4dux from "./components/Ts4dux";
import Ts5redux from "./components/Ts5redux";
import Ts6Demo01 from "./components/Ts6router/Demo01";
import Ts7context from "./components/Ts7context";
import Ts8lazy from "./components/Ts8lazy";
import Ts9lifing from "./components/Ts9lifingAndRadio";
import Gridlayout from "./Grid-layout";
import PopOver from "./AboutAntd/PopOver";
import Ts10Tabs from "./components/Ts10Tabs";
import Ts11DropDown from "./components/Ts11Dropdown";
import Ts12Select from "./components/Ts12Select";
import StyleType from "./components/Ts13Type";
import ChangeSvg from "./components/Ts14ChangeSvg";
import DRAGCOMP from "./Bottom";
import Demo01 from "./Request/Demo01";
import RouterShow from "./Router";
import {BlueButton, RedButton} from "./AboutAntd/BigButton";
import TsStyled from "./components/Ts15styled";
import SelectedComps from "./design";
import Test from "./Image";
import {Rating} from "./Image/Rating";
import {SliderComp} from "./Image/slider";
import {Load} from "./Image/loading";
import {Colorful} from "./Image/Colorful";
import AppColor from "./Image/color";

function Apply() {
  return (
    <>
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
      {/* <PopOver></PopOver>
      <Ts9lifing />
      <Ts10Tabs />
      <Ts11DropDown />
      <Ts12Select />
      <StyleType/> */}
      {/* <ChangeSvg /> */}
      <RouterShow />
      <hr />
      <DRAGCOMP>
        <div>1111</div>
        <div>222</div>
      </DRAGCOMP>
      <Demo01 />
      <BlueButton label="重置列表宽度" onClick={() => {}} />
      <RedButton label="重置列表宽度" onClick={() => {}} />
    </>
  );
}
function Apply1() {
  return (
    <>
      <SelectedComps
        comps={["button1", "button2"]}
        onChange={(item) => {
          console.log(item);
        }}
        delete={() => {
          console.log("123");
        }}
      />
      <Ts12Select />
    </>
  );
}
function App() {
  return (
    <>
      {/* <Test />
      <Rating />
      <SliderComp />
      {Load}
      <Colorful /> */}
      <AppColor/>
    </>
  );
}
export default App;
