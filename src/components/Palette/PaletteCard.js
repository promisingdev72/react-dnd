import React from "react";
import { useDrag } from "react-dnd";
import { BsX } from "react-icons/bs";
import "../emulator.css";

const PaletteCard = ({ id, icon, name, cross, deleteItem }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "palette",
    item: { id, icon, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="palette-card" ref={dragRef}>
      <div className="palette-image">{icon}</div>
      <p className="palette-name">{name}</p>
      <BsX className={cross} id={id} onClick={() => deleteItem(id)} />
      {/* {isDragging && "😱"} */}
    </div>
  );
};

export default PaletteCard;
