import React, { useCallback, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import Designtools from './Designtools';
//import { addReactngle } from './Shapes';

function Canvas(props) {
  const { shapeType, canvasSize } = props;
  const [fontfamily, setFontFamily] = useState('');
  const [align, setAligment] = useState('left');
  const [size, setFontSize] = useState('35');
  const [weight, setFontWeight] = useState('normal');
  const [italic, setFontItalic] = useState('');
  const [underline, setFontUnderline] = useState('');
  const [color, setObjColor] = useState('blue');
  const [strokewidth, setStrokeWidth] = useState(3);
  const [strokecolor, setStrokeColor] = useState('grey');
  const [objclone, setObjectClone] = useState('');
  const [csize, setCanvasSize] = useState({ width: '995', height: '500' });

  useEffect(() => {
    debugger;
    if (window.fabricanvas === undefined) {
      debugger;
      const tempCnvsId = document.getElementById('fabricEditor');
      window.fabricanvas = new fabric.Canvas(tempCnvsId);
      //init();
    }
  }, []);

  const init = () => {
    window.fabricanvas.on('object:modified', function (options) {
      console.log('options', options);
      //if (options.target) {
      //  console.log('an object was clicked!', options.target.type);
      //}
    });
  };

  /*   useEffect(() => {
    delete window.fabricanvas;
    if (window.fabricanvas === undefined) {
      const tempCnvsId = document.getElementById('fabricEditor');
      window.fabricanvas = new fabric.Canvas(tempCnvsId);

      init();
    }

  },[csize]);

 /*  const setBoardSize = (csize) {
    debugger
    let vicard ={width: 90, height: 50};//Visiting Card
    let flyer ={width: 480, height:640};// Flyer
    let csize = {};
    if(canvasSize === 'vicard') csize = vicard;
    if(canvasSize === 'flyer') csize = flyer; 
    //setCanvasSize(cize);

  } */

  useEffect(() => {
    if (shapeType === 'rect') addReactngle();
    if (shapeType === 'square') addSquare();
    if (shapeType === 'circle') addCircle();
    if (shapeType === 'oval') addOval();
    if (shapeType === 'line') addLine();
    if (shapeType === 'text') addText();
  }, [shapeType]);

  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontAlignment = (align) => {
    setAligment(align);
  };

  const handleObjectitalic = (italic) => {
    setFontItalic(italic);
  }

  const handleObjectUnderline = (underline) =>  {
    setFontUnderline(underline);
  }
 
  const handleObjectColor = (color) => {
    setObjColor(color.target.value);
  };

  const handleStrokeWidth = (strokewidth) => {
    setStrokeWidth(strokewidth.target.value);
  };

  const handleStrokeColor = (strokecolor) => {
    setStrokeColor(strokecolor.target.value);
  };

  const handleFontSize = (size) => {
    setFontSize(size.target.value);
  };

  const handleFontWeight = (weight) => {
    setFontWeight(weight);
  };

  const handleObjectClone = (clone) => {
    setObjectClone(clone);
  };

  const addReactngle = useCallback(() => {
    const draw = new fabric.Rect({
      id: '123',
      left: 300,
      top: 200,
      fill: color,
      width: 200,
      strokeWidth: strokewidth,
      stroke: strokecolor,
      height: 100,
      selectable: true,
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  const addSquare = useCallback(() => {
    const draw = new fabric.Rect({
      left: 300,
      top: 200,
      fill: color,
      strokeWidth: strokewidth,
      stroke: strokecolor,
      width: 120,
      height: 120,
      selectable: true,
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  const addCircle = useCallback(() => {
    const draw = new fabric.Circle({
      left: 30,
      top: 150,
      radius: 70,
      strokeWidth: strokewidth,
      stroke: strokecolor,
      selectable: true,
      fill: color,
      type: 'circle',
      originX: 'left',
      originY: 'top',
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  const addOval = useCallback(() => {
    const draw = new fabric.Ellipse({
      rx: 60,
      ry: 100,
      radius: 50,
      fill: color,
      stroke: 10,
      strokeWidth: strokewidth,
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  const addLine = useCallback(() => {
    const draw = new fabric.Line({
      strokeWidth: strokewidth,
      stroke: strokecolor,
      fill: color,
      originX: 'center',
      originY: 'center',
      hasBorders: false,
      hasControls: false,
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  const addText = useCallback(() => {
    //console.log(fontfamily);
    const draw = new fabric.Textbox(`Enter your Text`, {
      fontFamily: fontfamily,
      fontSize: size,
      textAlign: align,
      top: 25,
      left: 10,
      fill: color,
      strokeWidth: strokewidth,
      stroke: strokecolor,
      selectable: true,
      evented: true,
      fontWeight: weight,
      breakWords: true,
      //fixedWidth: 200,
      width: 250,
      //height: 25,
    });
    window.fabricanvas.add(draw).renderAll().setActiveObject(draw);
  });

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <Designtools
              fontChange={handleFontChange}
              onfontAlignment={handleFontAlignment}
              fontSize={handleFontSize}
              onfontWeight={handleFontWeight}
              objectColor={handleObjectColor}
              strokeWidth={handleStrokeWidth}
              strokeColor={handleStrokeColor}
              onObjClone={handleObjectClone}
              faItalic = {handleObjectitalic}
              faUnderline = {handleObjectUnderline}
            />
            <div className="card-body" style={{ height: '600px' }}>
              <canvas
                id="fabricEditor"
                height={csize.height}
                width={csize.width}
                style={{
                  height: '100%',
                  width: '100%',
                  border: '2px solid #cdcdcd',
                }}
              ></canvas>
              {/* {rect && <addReactngle />} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Canvas;
