import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import Square from "./Square";

function Board() {
  // bütün stateleri object içinde tutuyoruz
  const [allState,setState]=useState({
    textList:["", "", "", "", "", "", "", "", ""],
    textColorList:["", "", "", "", "", "", "", "", ""],
    backColorList:[
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ],
    borderColorList:["", "", "", "", "", "", "", "", ""],
    isWin:false
  });


                            /* ADIM 2 */

  // mouse üzerinde değilken koşula göre Text color ve Background Color Düzenlemesi
  const outChangeColor = (index) => {

    if (allState.textList[index] == "") { // mouse'un üzerinde olmadığı button'un texti boş ise 
      allState.textColorList[index] = "";  // text color'ı yeni değere setliyoruz
      allState.backColorList[index] = "#FFFFFF"; // Button background color'ı yeni değere setliyoruz
      setState({...allState,textColorList:allState.textColorList}); // setlenen değerler state'e aktarıyoruz    
      setState({...allState,backColorList:allState.backColorList});
// aynı kuralları burada da uygluyoruz
    } else if (allState.textList[index] !== "" && allState.textList[index] === "X") {
      allState.textColorList[index] = "#FF0505";
      allState.backColorList[index] = "#FFFFFF";
      setState({...allState,textColorList:allState.textColorList});      
      setState({...allState,backColorList:allState.backColorList});

    } else if (allState.textList[index] !== "" && allState.textList[index] === "O") {   
      allState.textColorList[index] = "#0026ED";   
      allState.backColorList[index] = "#FFFFFF";
      setState({...allState,textColorList:allState.textColorList});      
      setState({...allState,backColorList:allState.backColorList});
    }
  };

  // mouse üzerindeyken koşula göre Text color ve Background Color Düzenlemesi
  const onChangeColor = (index) => {

    if (allState.textList[index] === "") {  // mouse'un üzerinde olduğu button'un text'i boş ise
      allState.textColorList[index] = ""; // text color'ı yeni değere setliyoruz
      allState.backColorList[index] = "#adb5bd"; // Button background color'ı yeni değere setliyoruz
      setState({...allState,textColorList:allState.textColorList}); // setlenen değerler state'e aktarıyoruz
      setState({...allState,backColorList:allState.backColorList});

    } else if (allState.textList[index] !== "" && allState.textList[index] === "X") {
      allState.textColorList[index] = "#FFFFFF";
      allState.backColorList[index] = "#FF0505";
      setState({...allState,textColorList:allState.textColorList});
      setState({...allState,backColorList:allState.backColorList});

    } else if (allState.textList[index] === "O") {
      allState.textColorList[index] = "#FFFFFF";
      allState.backColorList[index] = "#0026ED";
      setState({...allState,textColorList:allState.textColorList});
      setState({...allState,backColorList:allState.backColorList});
    }
  };

    // Butona tıklandığında koşula göre Text , Text color, Background Color Düzenlemesi ve
    // oyunu kazanıp kazanmadığının kontrolü
  const handleClick = (index) => {
    if (allState.isWin === true) {  // isWin true ise false yapıp sayfayı yenileyip state'leri sıfırlıyoruz
      setState({...allState,isWin:allState.isWin=false});
      window.location.reload(false);  // sayfa yenileme kodu
    } else {
      if (allState.textList[index] == "") {  // iswin true değilse button içinde text boşsa tıklandığında X olarak setliyoruz
        allState.textList[index] = "X";  // indexe göre texti setler
        allState.textColorList[index] = "#FFFFFF";  // indexe göre text color setler
        allState.backColorList[index] = "#FF0505";  // indexe göre button background color setler
        // setlenen değerleri usestate ile state'imize aktarıyoruz
        setState({...allState,textList:allState.textList});        
        setState({...allState,textColorList:allState.textColorList});
        setState({...allState,backColorList:allState.backColorList});
        calculateWinner(allState.textList);  // setlenen textlist'i calculateWinner'a parametre olarak gönderiyoruz 
      } else if (allState.textList[index] !== "" && allState.textList[index] == "X") {   //buton içindeki text X ise O olarak setliyoruz
        allState.textList[index] = "O";
        allState.textColorList[index] = "#FFFFFF";
        allState.backColorList[index] = "#0026ED";
        setState({...allState,textList:allState.textList});
        setState({...allState,textColorList:allState.textColorList});       
        setState({...allState,backColorList:allState.backColorList});
        calculateWinner(allState.textList);
      } else if (allState.textList[index] == "O") {  // buton içindeki text O aynı butona bir daha tıklandığında tekrar boş olarak setliyoruz
        allState.textList[index] = "";  
        allState.textColorList[index] = "";
        allState.backColorList[index] = "#FFFFFF";
        setState({...allState,textList:allState.textList});        
        setState({...allState,textColorList:allState.textColorList});
        setState({...allState,backColorList:allState.backColorList});
        calculateWinner(allState.textList);
      }
    }
  };

                            /* ADIM 3 */

  // KAZANANI HESAPLAYAN FONKSİYON

  const calculateWinner = (text=allState.textList) => {
    if (text == undefined) {  // başlangıçta textList boşsa undefined oluyor onu check ediyoruz
      return null;
    } else {  // undefined değilse
      const winningPatterns = [   // kazanma olasıklarını diziye eleman olarak setliyoruz
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      // for döngüsüyle kazanma olasılıklarını dönüyoruz
      for (let i = 0; i < winningPatterns.length; i++) {   
        const [a, b, c] = winningPatterns[i]; // kazanma olasıklarını sırayla array'in içine setliyoruz
        if (text[a] === "X" && text[a] === text[b] && text[a] === text[c]) // X için her döngüde kazanıp kazanmadığımızı check ediyoruz
         {
          allState.borderColorList[a] = "#FF0505";  // eğer X kazandıysa kazanan butonların border color'ını değiştiriyoruz
          allState.borderColorList[b] = "#FF0505";
          allState.borderColorList[c] = "#FF0505";
          setState({...allState,borderColorList:allState.borderColorList});
          setState({...allState,isWin:allState.isWin=true});
          return allState.isWin;  // isWin'i true olarak return ediyoruz
        } else if (text[a] === "O" && text[a] === text[b] && text[a] === text[c]) // O için her döngüde kazanıp kazanmadığımızı check ediyoruz
         {
          allState.borderColorList[a] = "#0026ED";
          allState.borderColorList[b] = "#0026ED"; // eğer O kazandıysa kazanan butonların border color'ını değiştiriyoruz 
          allState.borderColorList[c] = "#0026ED";
          setState({...allState,borderColorList:allState.borderColorList});
          setState({...allState,isWin:allState.isWin=true});
          return allState.isWin;  // isWin'i true olarak return ediyoruz
        }
      }
    }

    return null;  // kazanma yoksa null return ediyoruz
  };


                      /* ADIM 1 */

   // renderSquare fonksiyonuna Button componentini çağırıyoruz
  const renderSquare = (index) => {    
      // Square'ın attributelarını buraya setliyoruz
      return <Square id={index} onMouseOver={() => onChangeColor(index)}
      onMouseOut={() => outChangeColor(index)} value={allState.textList[index]} textColor={allState.textColorList[index]} backColor={allState.backColorList[index]} borderColor={allState.borderColorList[index]} onClick={()=>handleClick(index)} />
    
  }
  return (
    <>
    <div className="text">
      <p>GAME TIME</p>
    </div>
    <div className="board">
      <div className="row">
      {renderSquare(0)}   
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className="row">
      {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
      </div>
      <div className="row">
      {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
    </div>
    </>
    
  );
}

export default Board;
