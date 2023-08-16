import { Button } from "../Button/component";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";

export default function ModalWindow({
  shoModalWindow,
  onCloseModalWindow,
  setUserAuthorize,
}) {
  const user = useContext(UserContext);

  const [autorize, setAutorize] = useState(
    user?.name === "Sasha" && user?.surname === "Shavrin"
      ? "авторизован"
      : "не авторизован"
  );

  return ReactDOM.createPortal(
    <CSSTransition
      in={shoModalWindow}
      unmountOnExit
      timeout={{ enter: 100, exit: 100 }}
    >
      <div className="modal">
        <h1>Модальное окно с авторизацией</h1>
        <p>{user.name}</p>
        <p>{user.surname}</p>
        <Button
          onClick={() => {
            onCloseModalWindow();
            if (autorize) setUserAuthorize(true);
          }}
        >
          {autorize} (Закрыть окно)
        </Button>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
}
