import { Review } from "../Review/component";

export const Reviews = ({ reviews }) => {
  const resultReviws = reviews.map((item) => {
    return <Review key={item.id} item={item} />;
  });

  return (
    <div>
      <h3>Reviews:</h3>
      {resultReviws}
    </div>
  );
};
