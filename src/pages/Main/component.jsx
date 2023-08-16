import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useContext, useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { UserContext } from "../../contexts/userContext";
import { Provider } from "../../custome-redux/provider";
import { store } from "../../store";
import { Cart } from "../../components/Cart/component";
import ModalWindow from "../../components/ModalWindow/component";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const user = useContext(UserContext);
  const [userAuthorize, setUserAuthorize] = useState(false);

  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
  );
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantIndex);
  }, [activeRestaurantIndex]);

  return (
    <Provider store={store}>
      <UserContext.Provider value={user}>
        <Layout>
          <Button
            onClick={() => {
              setIsModal(true);
            }}
          >
            {userAuthorize ? (
              <>
                <p>{user.name}</p>
              </>
            ) : (
              "Авторизация"
            )}
          </Button>
          <ModalWindow
            shoModalWindow={isModal}
            onCloseModalWindow={() => {
              setIsModal(!isModal);
            }}
            setUserAuthorize={setUserAuthorize}
          />
          <Tabs
            restaurants={restaurants}
            onTabSelect={setActiveRestaurantIndex}
          />
          <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
          <Cart />
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};
