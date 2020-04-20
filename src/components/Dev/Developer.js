import React from "react";
import cn from "classnames";

import DevBox from "./DevBox";
import DevItem from "./DevItem";

const Developer = ({ onClick, menus }) => {
  const { ALL, JAVA, C, WEB } = menus;
  const itemData = [
    {
      ALL,
      lng: { C },
      title: "C언어다!",
      sub: "서브다!",
    },
    {
      ALL,
      lng: { C },
      title: "C언어다!",
      sub: "서브다!",
    },
    {
      ALL,
      lng: { JAVA },
      title: "JAVA언어다!",
      sub: "서브다!",
    },
    {
      ALL,
      lng: { JAVA },
      title: "JAVA언어다!",
      sub: "서브다!",
    },
    {
      ALL,
      lng: { WEB },
      title: "WEB언어다!",
      sub: "서브다!",
    },
  ];

  return (
    <DevBox>
      <div className="pjBar">
        <div className={cn("menu", { ALL })} onClick={() => onClick("ALL")}>
          ALL
        </div>
        <div className={cn("menu", { C })} onClick={() => onClick("C")}>
          C
        </div>
        <div className={cn("menu", { JAVA })} onClick={() => onClick("JAVA")}>
          JAVA
        </div>
        <div className={cn("menu", { WEB })} onClick={() => onClick("WEB")}>
          WEB
        </div>
      </div>
      <div className="pjForm">
        {itemData.map((item, index) => {
          console.log(item);
          return <DevItem item={item} key={index}></DevItem>;
        })}
      </div>
    </DevBox>
  );
};

export default Developer;
