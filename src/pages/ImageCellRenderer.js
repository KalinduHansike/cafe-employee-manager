import React from "react";

const ImageCellRenderer = (props) => {
  const imageUrl = props.value;

  return (
    <img src={imageUrl} alt="Image" style={{ width: "50px", height: "50px" }} />
  );
};

export default ImageCellRenderer;
