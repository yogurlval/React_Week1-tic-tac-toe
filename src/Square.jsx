import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? <img src='https://media.istockphoto.com/id/1460120636/vector/pink-donut-with-choco-sprinkles-in-food-cartoon-animated-vector-illustration.jpg?s=612x612&w=0&k=20&c=UfD-66UcQsib2R_6mBAwFUU_d2ZJ6tbYWBQ_gJFpI-U=' alt="" /> : props.squareValue}
    </div>
  );
};

export default Square;