import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import Square from "./Square";

// const textArray =["X","O"," "];

function Board2() {
  const emptyArray = ["", "", "", "", "", "", "", "", ""];
  const colorList = ["", "", "", "", "", "", "", "", ""];
  const backColorList = [
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ];
  const borderColorList = ["", "", "", "", "", "", "", "", ""];
  const [emptyArr, setText] = useState(emptyArray);
  const [borderColor, setBorderColor] = useState(borderColorList);
  const [isWin, setWin] = useState(false);
  const [colorClick, setColorClick] = useState(colorList);
  const [backgroundColorClick, setBackgroundColorClick] =
    useState(backColorList);

  const outChangeColor = (index) => {
    if (emptyArr[index] == "") {
      colorClick[index] = "";
      backgroundColorClick[index] = "#FFFFFF";
      setColorClick([...colorClick]);
      console.log("boş", colorList);
      setBackgroundColorClick([...backgroundColorClick]);
    } else if (emptyArr[index] !== "" && emptyArr[index] === "X") {
      colorClick[index] = "#FF0505";
      backgroundColorClick[index] = "#FFFFFF";
      setColorClick([...colorClick]);
      console.log("x", colorList);
      setBackgroundColorClick([...backgroundColorClick]);
    } else if (emptyArr[index] !== "" && emptyArr[index] === "O") {
      colorClick[index] = "#0026ED";
      backgroundColorClick[index] = "#FFFFFF";
      setColorClick([...colorClick]);
      console.log("o", colorList);
      setBackgroundColorClick([...backgroundColorClick]);
    }
  };

  const onChangeColor = (index) => {
    if (emptyArr[index] === "") {
      colorClick[index] = "";
      backgroundColorClick[index] = "#adb5bd";
      setColorClick([...colorClick]);
      setBackgroundColorClick([...backgroundColorClick]);
    } else if (emptyArr[index] !== "" && emptyArr[index] === "X") {
      colorClick[index] = "#FFFFFF";
      backgroundColorClick[index] = "#FF0505";
      setColorClick([...colorClick]);
      setBackgroundColorClick([...backgroundColorClick]);
    } else if (emptyArr[index] === "O") {
      colorClick[index] = "#FFFFFF";
      backgroundColorClick[index] = "#0026ED";
      setColorClick([...colorClick]);
      setBackgroundColorClick([...backgroundColorClick]);
    }
  };

  const handleClick = (index) => {
    if (isWin === true) {
      setWin(false);
      window.location.reload(false);
    } else {
      if (emptyArr[index] == "") {
        emptyArr[index] = "X";
        colorClick[index] = "#FFFFFF";
        backgroundColorClick[index] = "#FF0505";
        setText([...emptyArr]);
        console.log("boş", emptyArr);
        setColorClick([...colorClick]);
        setBackgroundColorClick([...backgroundColorClick]);
        calculateWinner(emptyArr);
      } else if (emptyArr[index] !== "" && emptyArr[index] == "X") {
        emptyArr[index] = "O";
        colorClick[index] = "#FFFFFF";
        backgroundColorClick[index] = "#0026ED";
        setText([...emptyArr]);
        setColorClick([...colorClick]);
        console.log("x", emptyArr);
        setBackgroundColorClick([...backgroundColorClick]);
        calculateWinner(emptyArr);
      } else if (emptyArr[index] == "O") {
        emptyArr[index] = "";
        colorClick[index] = "";
        backgroundColorClick[index] = "#FFFFFF";
        setText([...emptyArr]);
        console.log("o", emptyArr);
        setColorClick([...colorClick]);
        setBackgroundColorClick([...backgroundColorClick]);
        calculateWinner(emptyArr);
      }
    }
  };
  //   const renderSquare = (index) => {

  //     return <Square id={index}value={emptyArr[index]} styleColor={{colorClick : colorClick}} styleBackColor={{colorBack : backgroundColorClick}} onClick={()=>handleClick(index)} />
  //   }

  const calculateWinner = (emptyArr) => {
    if (emptyArr == undefined) {
      return null;
    } else {
      const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i];
        if (
          emptyArr[a] === "X" &&
          emptyArr[a] === emptyArr[b] &&
          emptyArr[a] === emptyArr[c]
        ) {
          borderColor[a] = "#FF0505";
          borderColor[b] = "#FF0505";
          borderColor[c] = "#FF0505";
          setBorderColor([...borderColor]);
          setWin(true);
          return isWin;
        } else if (
          emptyArr[a] === "O" &&
          emptyArr[a] === emptyArr[b] &&
          emptyArr[a] === emptyArr[c]
        ) {
          borderColor[a] = "#0026ED";
          borderColor[b] = "#0026ED";
          borderColor[c] = "#0026ED";
          setBorderColor([...borderColor]);
          setWin(true);
          return isWin;
        }
      }
    }

    return null;
  };



  return (
    <div className="board">
      <div className="row">
        <button
          id={0}
          style={{
            backgroundColor: backgroundColorClick[0],
            borderColor: borderColor[0],
          }}
          onMouseOver={() => onChangeColor(0)}
          onMouseOut={() => outChangeColor(0)}
          className="square"
          onClick={() => handleClick(0)}
        >
          <p style={{ color: colorClick[0] }}>{emptyArr[0]}</p>
        </button>
        <button
          id={1}
          style={{
            backgroundColor: backgroundColorClick[1],
            borderColor: borderColor[1],
          }}
          onMouseOver={() => onChangeColor(1)}
          onMouseOut={() => outChangeColor(1)}
          className="square"
          onClick={() => handleClick(1)}
        >
          <p style={{ color: colorClick[1] }}>{emptyArr[1]}</p>
        </button>
        <button
          id={2}
          style={{
            backgroundColor: backgroundColorClick[2],
            borderColor: borderColor[2],
          }}
          onMouseOver={() => onChangeColor(2)}
          onMouseOut={() => outChangeColor(2)}
          className="square"
          onClick={() => handleClick(2)}
        >
          <p style={{ color: colorClick[2] }}>{emptyArr[2]}</p>
        </button>
      </div>
      <div className="row">
        <button
          id={3}
          style={{
            backgroundColor: backgroundColorClick[3],
            borderColor: borderColor[3],
          }}
          onMouseOver={() => onChangeColor(3)}
          onMouseOut={() => outChangeColor(3)}
          className="square"
          onClick={() => handleClick(3)}
        >
          <p style={{ color: colorClick[3] }}>{emptyArr[3]}</p>
        </button>
        <button
          id={4}
          style={{
            backgroundColor: backgroundColorClick[4],
            borderColor: borderColor[4],
          }}
          onMouseOver={() => onChangeColor(4)}
          onMouseOut={() => outChangeColor(4)}
          className="square"
          onClick={() => handleClick(4)}
        >
          <p style={{ color: colorClick[4] }}>{emptyArr[4]}</p>
        </button>
        <button
          id={5}
          style={{
            backgroundColor: backgroundColorClick[5],
            borderColor: borderColor[5],
          }}
          onMouseOver={() => onChangeColor(5)}
          onMouseOut={() => outChangeColor(5)}
          className="square"
          onClick={() => handleClick(5)}
        >
          <p style={{ color: colorClick[5] }}>{emptyArr[5]}</p>
        </button>
      </div>
      <div className="row">
        <button
          id={6}
          style={{
            backgroundColor: backgroundColorClick[6],
            borderColor: borderColor[6],
          }}
          onMouseOver={() => onChangeColor(6)}
          onMouseOut={() => outChangeColor(6)}
          className="square"
          onClick={() => handleClick(6)}
        >
          <p style={{ color: colorClick[6] }}>{emptyArr[6]}</p>
        </button>
        <button
          id={7}
          style={{
            backgroundColor: backgroundColorClick[7],
            borderColor: borderColor[7],
          }}
          onMouseOver={() => onChangeColor(7)}
          onMouseOut={() => outChangeColor(7)}
          className="square"
          onClick={() => handleClick(7)}
        >
          <p style={{ color: colorClick[7] }}>{emptyArr[7]}</p>
        </button>
        <button
          id={8}
          style={{
            backgroundColor: backgroundColorClick[8],
            borderColor: borderColor[8],
          }}
          onMouseOver={() => onChangeColor(8)}
          onMouseOut={() => outChangeColor(8)}
          className="square"
          onClick={() => handleClick(8)}
        >
          <p style={{ color: colorClick[8] }}>{emptyArr[8]}</p>
        </button>
      </div>
    </div>
  );
}

export default Board2;
