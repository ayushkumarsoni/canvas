import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import Canvas from '../Canvas/Canvas';

const CanvasBoard = () => {
  const [shape, setShape] = useState('');
  const [csize, setCanvasSize] = useState('');

  const hanldeClickShape = (type) => {
    setShape(type);
  };

  const handleSizeChange = (csize) => {
    setCanvasSize(csize);
  };

  return (
    <>
      <div className="col-md-3">
        <LeftMenu
          onClickShape={hanldeClickShape}
          canvasSizeChange={handleSizeChange}
        />
      </div>
      <div className="col-md-9">
        <Canvas shapeType={shape} canvasSize={csize} />
      </div>
    </>
  );
};

export default CanvasBoard;
