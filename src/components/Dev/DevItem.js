import React from "react";
import cn from "classnames";

const DevItem = ({ item }) => {
  const { ALL, lng, title, sub } = item;

  return (
    <div className={cn("pjForm-item", lng, { ALL })}>
      {console.log(lng)}
      <div className="item-img"></div>
      <div className="item-title">
        <div className="main-title">{title}</div>
        <div className="sub-title">{sub}</div>
      </div>
    </div>
  );
};

export default DevItem;
