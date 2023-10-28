// eslintの解析をこのファイルのみoffにする。
/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
// exportしたコンポーネントを分割代入
import { ColorfulMessage } from "./componets/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceCount, setFaceCount] = useState(1);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  // カウントアップ処理
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // わんころ大発生
  const onClickSwitchShowCont = () => {
    setFaceCount(faceCount + 1);
  };

  // ボタンのonoffの処理
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // faceShowFlagがfalseの場合だけ処理を回す。(論理演算子)
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // faceShowFlagがtrueの場合だけ処理を回す。（論理演算子）
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // useEffectで第二引き数に空の配列を渡すとそのコンポーネントで最初の1回だけ通したい処理を実行できる。
    // 第二引数の配列の中に変数を指定すると変数の値が変化したときだけ変数内の処理を実行できる。
    // eslintの解析をこの文のみoffにする。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // 画面の表示
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <br />
      <button onClick={onClickSwitchShowCont}>わんころ</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
      {Array(faceCount).fill(<div>🐕</div>)}
    </>
  );
};

// 他のファイルでも当ファイルの使用することを名言
export default App;
