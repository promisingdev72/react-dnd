import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import PaletteCard from "../Palette/PaletteCard";
import "../emulator.css";
import PhoneImage from "../../assets/images/phone.png";
import { BsImage } from "react-icons/bs";
import { BsInputCursorText } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { BsCaretRightSquare } from "react-icons/bs";

const PaletteItems = [
  { id: 1, icon: <BsImage />, name: "Item1" },
  { id: 2, icon: <BsInputCursorText />, name: "Item2" },
  { id: 3, icon: <BsListUl />, name: "Item3" },
  { id: 4, icon: <BsLink45Deg />, name: "Item4" },
  { id: 5, icon: <BsCameraVideo />, name: "Item5" },
  { id: 6, icon: <BsCaretRightSquare />, name: "Item6" },
];

const Emulator = () => {
  const [emul, setEmul] = useState([]);
  const [cross, setCross] = useState("display-none");
  const [showComponents, setshowComponents] = useState(true);

  const togglePalette = () => {
    setshowComponents(!showComponents);
  };

  const deleteItem = (u_id) => {
    const tmpEmul = [];
    emul.map((item) => {
      const { id } = item;
      if (u_id !== id) {
        tmpEmul.push(item);
      }
    });

    setEmul([...tmpEmul]);
  };

  const [{ isOver }, dropRef] = useDrop({
    accept: "palette",
    drop: (item) =>
      setEmul((emul) => (!emul.includes(item) ? [...emul, item] : emul)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <React.Fragment>
      <div className="fragment">
        <div className="left-side">
          <p className="palette-title">Palette</p>
          <p className="compasants" onClick={togglePalette}>
            Composants
          </p>
          {showComponents && (
            <div className="palettes-wrap">
              {PaletteItems.map((paletteitem, index) => (
                <PaletteCard
                  draggable
                  id={paletteitem.id}
                  icon={paletteitem.icon}
                  name={paletteitem.name}
                  key={index}
                  cross={cross}
                />
              ))}
            </div>
          )}
        </div>
        <div className="right-side">
          <div className="emul" ref={dropRef}>
            <div className="phoneWrap">
              <img src={PhoneImage} className="phoneimage" />
              <div className="offsetPaletteItem">
                {emul.map((paletteitem, index) => (
                  <PaletteCard
                    id={paletteitem.id}
                    icon={paletteitem.icon}
                    name={paletteitem.name}
                    key={index}
                    deleteItem={deleteItem}
                    cross={() => setCross("display-block")}
                  />
                ))}
                {/* {isOver && <div>Drop Here!!!</div>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Emulator;
