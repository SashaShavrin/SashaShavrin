export const Dish = ({ item }) => {
  return (
    <div>
      <div>
        Блюдо: <b>{item.name}</b>
      </div>
      <div>Цена: {item.price} $</div>
      <div>Ингридиенты:</div>
      <ul>
        {item.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};
