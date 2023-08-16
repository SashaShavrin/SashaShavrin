import { useContext } from "react";
import ModalWindow from "../ModalWindow/component";

import { UserContext } from "../../contexts/userContext";

export const Button = ({ children, onClick, disabled }) => {
  const user = useContext(UserContext);
  console.log(user.name);

  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
