import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  closeOnBackgroundClick?: boolean;
  hideCloseIcon?: boolean;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const close = () => {
    navigate("?");
  };
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const clickOnBackground = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.target === backgroundRef.current &&
      props.closeOnBackgroundClick
    ) {
      close();
    }
  };
  const renderCloseIcon = () => (
    <div className="ModalCloser" onClick={close}>
      ❌
    </div>
  );
  return (
    <>
      <div className="ModalBackground" />
      <div
        onClick={clickOnBackground}
        ref={backgroundRef}
        className="ModalContainer"
      >
        <div className="ModalMain">
          {!props.hideCloseIcon && renderCloseIcon()}
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};
