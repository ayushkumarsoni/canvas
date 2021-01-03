import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Afterhead from './Components/Afterhead';
// import LeftMenu from './Components/LeftMenu';
// import Canvas from './Components/Canvas/Canvas';
import CanvasBoard from './Components/Canvas/index';

function App() {
  return (
    <>
      <Header />
      <Afterhead />
      {/* Body Part */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto m-4">
            <div className="row">
              <CanvasBoard />
              {/* <div className="col-md-3">
                <LeftMenu />
              </div>
              <div className="col-md-9">
                <Canvas />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Body Part End */}
      <Footer />
    </>
  );
}

export default App;
