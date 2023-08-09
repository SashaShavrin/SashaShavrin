import { useReducer } from "react";

const DEFAULT_VALUE_NEWDISH = {
  name: "",
  price: "",
  ingridients: [""],
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setPrice":
      return { ...state, price: payload };
    case "setIngridients":
      return { ...state, ingridients: [payload] };
    default:
      return state;
  }
};

export function NewDish() {
  const [formNewDish, dispatch] = useReducer(reducer, DEFAULT_VALUE_NEWDISH);
  console.log(formNewDish);

  return (
    <div>
      <div>
        <label>Name dish: </label>
        <input
          value={formNewDish.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Price dish: </label>
        <input
          value={formNewDish.price}
          type="number"
          onChange={(event) =>
            dispatch({ type: "setPrice", payload: event.target.value })
          }
        />
        <span>$</span>
      </div>
      <div>
        <label>Ingridients dish: </label>
        <input
          value={formNewDish.ingridients.join()}
          onChange={(event) =>
            dispatch({
              type: "setIngridients",
              payload: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
