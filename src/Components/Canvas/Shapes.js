import React from 'react';
import { fabric } from 'fabric';

// function Shapes(){
//      return(
//           <>
//                hello
//           </>
//      );
// }

export const addReactngle = () => {
  const draw = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    selectable: true,
  });
  //   window.fabricanvas.add(draw);
};

// export default Shapes;
