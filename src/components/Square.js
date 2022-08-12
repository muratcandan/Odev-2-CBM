
import * as React from 'react';
function Square({onClick,onMouseOver,onMouseOut,value,textColor,backColor,borderColor,id}) {

            /* 
            square içinde attributelar burada değişken olarak aktarıldı ve bu değerleri
            buttona attribute olarak aktarıyoruz.
             */
    return (
      <button   key={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{backgroundColor:backColor,borderColor:borderColor }} className="square"  onClick={onClick}>
        <p  style={{color:textColor }}>{value}</p>
      </button>
    );
  }

  export default Square;