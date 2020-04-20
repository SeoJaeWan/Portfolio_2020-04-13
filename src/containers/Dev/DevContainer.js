import React, { useState } from "react";
import Developer from "../../components/Dev/Developer";

const DevContainer = () => {
  const initialState = {
    ALL: false,
    C: false,
    JAVA: false,
    WEB: false,
  };

  const [menus, setMenus] = useState({
    ...initialState,
    ALL: true,
  });

  // const m = ["ALL", "C", "JAVA", "WEB"];

  const onClick = (id) => {
    // setMenus(() => {
    //   let avg = {};

    //   for (var i = 0; i < 4; i++) {
    //     if (m[i] === id) avg = { ...avg, [id]: !menus[id] };
    //     else if (menus[m[i]] === true) avg = { ...avg, [m[i]]: !menus[m[i]] };
    //     else avg = { ...avg, [m[i]]: menus[m[i]] };
    //   }

    //   return avg;
    // });

    // setMenus({
    //   ALL: false,
    //   C: false,
    //   JAVA: false,
    //   WEB: false,
    //   [id]: !menus[id],
    // });   이게 맞는 방법인가 자괴감이 든다...

    const result = { ...initialState, [id]: true };
    setMenus((prev) => {
      return { ...prev, ...result }; // 불변성을 위해서 ...prev도 사용한다.
    });
  };

  return <Developer onClick={onClick} menus={menus} />;
};

export default DevContainer;
