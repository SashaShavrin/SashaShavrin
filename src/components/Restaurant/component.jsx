import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";

export const Restaurant = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      <Menu menu={data.menu} />
      <Reviews reviews={data.reviews} />
    </div>
  );
};
