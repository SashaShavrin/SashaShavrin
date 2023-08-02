export const Review = ({ item }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div>Юзер: {item.user}</div>
      <div>Текст: {item.text}</div>
      <div>Рейтинг: {item.rating}</div>
    </div>
  );
};
