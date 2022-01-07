// @ts-nocheck
import React from "react";
import _ from "lodash";
import { Responsive, WidthProvider, GridLayout } from "react-grid-layout";
import {
  addChildAction,
  changeChildAction,
  selectCompAction,
  wrapChildAction,
  isChildAction,
  unwrapChildAction,
} from "./actions";
import {
  multi,
  withSelectable,
  valueComp,
  withDefault,
  sameTypeMap,
  InputComp,
} from "./functions";
import TypedComp from "./typed";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridItemComp = withSelectable(TypedComp);

export const GridLayoutComp = (function () {
  const childrenMap = {
    layout: valueComp([]),
    //items: InputComp
    items: withDefault(sameTypeMap(GridItemComp), { v1: "input" }),
  };
  const viewFunc = (props, dispatch) => {
    const onLayoutChange = (newLayout) => {
      // 忽略掉dropping事件
      const isDropping = newLayout.find(
        (item) => item.i === "__dropping-elem__"
      );
      if (isDropping) {
        return;
      }
      dispatch(changeChildAction("layout", newLayout));
    };
    const onDrop = (layout, layoutItem, _event) => {
      const compType = _event.dataTransfer.getData("compType");
      switch (compType) {
        case "button":
          layoutItem.h = 3.2;
          layoutItem.minH = 3.2;
          layoutItem.maxH = 3.2;
          break;
        case "input":
          layoutItem.h = 3.2;
          layoutItem.minH = 3.2;
          layoutItem.maxH = 3.2;
          layoutItem.minW = 1;
          break;
        case "switch":
          layoutItem.h = 2.3;
          layoutItem.minH = 2.3;
          layoutItem.maxH = 2.3;
          layoutItem.minW = 1;
          break;
        default:
          break;
      }
      const widgetValue = { compType: compType };
      const key = Math.floor(Math.random() * 0xffffffff).toString(16);
      // 这两个action需要被打包
      dispatch(
        changeChildAction("layout", [
          ...props.layout,
          { ...layoutItem, i: key },
        ])
      );
      dispatch(wrapChildAction("items", addChildAction(key, widgetValue)));
    };

    return (
      <div onClick={() => dispatch(selectCompAction())}>
        <ResponsiveReactGridLayout
          layouts={{ lg: props.layout }}
          onDrop={onDrop}
          onLayoutChange={onLayoutChange}
          measureBeforeMount
          isDroppable
          compactType={"horizontal"}
          verticalCompact={false}
          margin={[0, 0]}
          rowHeight={10}
        >
          {Object.keys(props.items).map((key) => {
            return <div key={key}>{props.items[key].view}</div>;
          })}
        </ResponsiveReactGridLayout>
      </div>
    );
  };
  const propertyViewFunc = (children) => {
    return <>{children.items.propertyView}</>;
  };
  return multi(childrenMap, viewFunc, propertyViewFunc);
})();
