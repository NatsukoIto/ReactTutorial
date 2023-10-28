import React from "react";

// 通常のexport
export const ColorfulMessage = (props) => {
  // オブジェクトの分割代入　オブジェクトのプロパティから値を取り出す。
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export defaul
// export default ColorfulMessage;
