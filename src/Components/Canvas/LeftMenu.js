import React from 'react';

function LeftMenu(props) {
  const { onClickShape, canvasSizeChange } = props;
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>Edit Options</h5>
            </div>
            <div className="card-body">
              <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                  <div className="col-12">
                    <div className="row navbar">
                      <ul className="col-12 navbar-nav flex-column">
                        <li className="nav-item dropdown">
                          <div className="shapes" id="shapesget">
                            <h3>Select Product</h3>
                          </div>
                          <select
                            className="form-select choose_product mb-2"
                            id="choose_product"
                            style={{ width: '100%' }}
                            onChange={canvasSizeChange}
                          >
                            <option value="flyer">Flyer</option>
                            <option value="card">Visiting Card</option>
                          </select>
                        </li>
                        {/* Shapes */}
                        <li className="nav-item dropdown">
                          <div className="shapes" id="shapesget">
                            <h3>Shapes</h3>
                          </div>
                          <div className="shapes_inner" id="shapes_inner">
                            <div
                              className="circle shapes_item"
                              id="circle"
                              onClick={() => onClickShape('circle')}
                            >
                              <h5>Circle</h5>
                            </div>
                            <div
                              className="rectangle shapes_item"
                              id="rectangle"
                              onClick={() => onClickShape('rect')}
                            >
                              <h5>Rectangle</h5>
                            </div>
                            <div
                              className="square shapes_item"
                              id="square"
                              onClick={() => onClickShape('square')}
                            >
                              <h5>Square</h5>
                            </div>
                            <div
                              className="oval shapes_item"
                              id="oval"
                              onClick={() => onClickShape('oval')}
                            >
                              <h5>Oval</h5>
                            </div>
                            <div
                              className="line shapes_item"
                              id="line"
                              onClick={() => onClickShape('line')}
                            >
                              <h5>Line</h5>
                            </div>
                            <div
                              className="arrow shapes_item"
                              id="arrow"
                              onClick={() => onClickShape('arrow')}
                            >
                              <h5>Arrow</h5>
                            </div>
                          </div>
                        </li>
                        {/* Text */}
                        <li className="nav-item dropdown">
                          <div className="shapes" id="shapesget">
                            <h3>Text</h3>
                          </div>
                          <div className="shapes_inner" id="shapes_inner">
                            <div
                              className="text shapes_item"
                              id="text"
                              onClick={() => onClickShape('text')}
                            >
                              <h5>Text</h5>
                            </div>
                          </div>
                        </li>
                        {/* Image */}
                        <li className="nav-item dropdown">
                          <div className="shapes" id="shapesget">
                            <h3>Image</h3>
                          </div>
                          <div className="shapes_inner" id="shapes_inner">
                            <div
                              className="text shapes_item"
                              id="text"
                              onClick={() => onClickShape('image')}
                            >
                              <h5>Image</h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
