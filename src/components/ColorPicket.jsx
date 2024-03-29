import React from "react";

const ColorPicket = () => {
  const changeColor = () => {
    const randomColors = [
      "lightgreen",
      "yellow",
      "tomato",
      "green",
      "orange",
      "peachpuff",
      "orange",
      "skyblue",
      "red",
      "blue",
      "navy",
      "pink",
      "olive",
      "gray",
      "steelblue",
      "lightseagreen",
      "papayawhip",
      "whitesmoke",
    ];
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];
    document.getElementById("butty").style.backgroundColor = color;
  };

  const buttonStyle = {
    color: "#000",
    backgroundColor: "lightseagreen",
    width: "12vw",
    height: "7vh",
    marginLeft: "30.5vw",
  };
  return (
    <div>
      <h2>Color Picker</h2>
      <button onClick={changeColor} style={buttonStyle} id="butty">
        Change the Color
      </button>
    </div>
  );
};

export default ColorPicket;
