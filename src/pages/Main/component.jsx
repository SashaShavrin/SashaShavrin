import { useState } from "react";

import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <div>
        <Tabs
          restaurants={restaurants}
          onTabSelect={setActiveRestaurantIndex}
        />
      </div>
      <h2>{restaurants[activeRestaurantIndex].name}</h2>
      <Restaurant data={restaurants[activeRestaurantIndex]} />
    </Layout>
  );
};
