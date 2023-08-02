import { Dish } from "../../components/Dish/component";

export const Menu = ({ menu }) => {
  const resultMenu = menu.map((item) => {
    return <Dish key={item.id} item={item} />;
  });

  return (
    <div style={{ marginRight: "25px" }}>
      <h3>Menu:</h3>
      {resultMenu}
    </div>
  );
};
