import { useState } from "react";

export const Dish = ({ dish }) => {
  const [countDish, setCountDish] = useState(0);
  const price = 7;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "150px" }}>{dish.name}</div>
      <div style={{ marginLeft: "15px" }}>
        <button
          onClick={() => {
            if (countDish === 0) return;
            setCountDish(countDish - 1);
          }}
        >
          -
        </button>
        {countDish}
        <button onClick={() => setCountDish(countDish + 1)}>+</button>
        <span>Price: {price * countDish} $</span>
      </div>
    </div>
  );
};
