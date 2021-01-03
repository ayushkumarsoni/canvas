import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBold,
  faClone,
  faItalic,
  faTrashAlt,
  faUnderline,
  faRedoAlt,
  faUndoAlt,
} from '@fortawesome/free-solid-svg-icons';
function Designtools(props) {
  const {
    fontChange,
    onfontAlignment,
    fontSize,
    onfontWeight,
    objectColor,
    strokeColor,
    strokeWidth,
    onObjClone,
    faItalic,
    faUnderline,
  } = props;
  const [moreleft, setMoreLeft] = useState(false);
  const [moreright, setMoreRight] = useState(true);

  const more_right = () => {
    setMoreLeft(true);
    setMoreRight(false);
  };

  const more_left = () => {
    setMoreLeft(false);
    setMoreRight(true);
  };

  return (
    <>
      <div className="card-header">
        <div className="design_inner">
          {moreright && (
            <div
              className="item-group ms-1 me-1"
              id="first_bar_tool"
              style={{ display: moreright }}
            >
              <div className="col-3 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_font">Font</label>
                  <select
                    className="form-select"
                    id="tool_font"
                    name="choose_font"
                    onChange={fontChange}
                  >
                    <option value="Arial">Arial</option>
                    <option value="lato">Lato</option>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="oswald">Oswald</option>
                  </select>
                </div>
              </div>
              <div className="col-2 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_fsize">Font Size</label>
                  <input
                    class="form-control"
                    id="tool_fsize"
                    type="number"
                    name="tool_fsize"
                    placeholder="Font Size"
                    onInput={fontSize}
                  />
                </div>
              </div>
              <div className="col-2 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_fsize">Stroke Width</label>
                  <input
                    class="form-control"
                    id="tool_fsize"
                    type="number"
                    name="tool_fsize"
                    placeholder="Stroke Width"
                    onInput={strokeWidth}
                  />
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_color">Color</label>
                  <input
                    class="form-control form-control-color"
                    id="tool_color"
                    type="color"
                    name="tool_color"
                    placeholder="Choose Color"
                    onInput={objectColor}
                  />
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_bgcolor">Stroke</label>
                  <input
                    class="form-control form-control-color"
                    id="tool_bgcolor"
                    type="color"
                    name="tool_color"
                    placeholder="Choose Color"
                    onInput={strokeColor}
                  />
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_clone">Clone</label>
                  <button
                    className="form-control"
                    id="tool_clone"
                    onClick={() => onObjClone('clone')}
                  >
                    <FontAwesomeIcon icon={faClone} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="more_right">More</label>
                  <button
                    className="form-control"
                    id="more_right"
                    onClick={more_right}
                  >
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </button>
                </div>
              </div>
            </div>
          )}
          {moreleft && (
            <div
              className="item-group ms-1 me-1"
              id="second_bar_tool"
              style={{ display: moreleft }}
            >
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="more_right">More</label>
                  <button
                    className="form-control"
                    id="more_right"
                    onClick={more_left}
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2">
                <div className="design_item">
                  <label for="tool_left">Left</label>
                  <button
                    className="form-control"
                    id="tool_left"
                    onClick={() => onfontAlignment('left')}
                  >
                    <FontAwesomeIcon icon={faAlignLeft} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2">
                <div className="design_item">
                  <label for="tool_center">Center</label>
                  <button
                    className="form-control"
                    id="tool_center"
                    onClick={() => onfontAlignment('center')}
                  >
                    <FontAwesomeIcon icon={faAlignCenter} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2">
                <div className="design_item">
                  <label for="tool_right">Right</label>
                  <button
                    className="form-control"
                    id="tool_right"
                    onClick={() => onfontAlignment('right')}
                  >
                    <FontAwesomeIcon icon={faAlignRight} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2">
                <div className="design_item">
                  <label for="tool_justify">Justify</label>
                  <button
                    className="form-control"
                    id="tool_justify"
                    onClick={() => onfontAlignment('justify')}
                  >
                    <FontAwesomeIcon icon={faAlignJustify} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_bold">Bold</label>
                  <button
                    className="form-control"
                    id="tool_bold"
                    onClick={() => onfontWeight('bold')}
                  >
                    <FontAwesomeIcon icon={faBold} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_italic">Italic</label>
                  <button className="form-control" id="tool_italic">
                    <FontAwesomeIcon icon={faItalic} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_underline">Underline</label>
                  <button className="form-control" id="tool_underline">
                    <FontAwesomeIcon icon={faUnderline} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_delete">Delete</label>
                  <button className="form-control" id="tool_delete">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_undo">Undo</label>
                  <button className="form-control" id="tool_undo">
                    <FontAwesomeIcon icon={faUndoAlt} />
                  </button>
                </div>
              </div>
              <div className="col-1 me-2 mb-1">
                <div className="design_item">
                  <label for="tool_redo">Redo</label>
                  <button className="form-control" id="tool_redo">
                    <FontAwesomeIcon icon={faRedoAlt} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Designtools;
