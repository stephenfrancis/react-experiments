import React from "react";
import { Link } from "react-router-dom";

import { Modal } from "./Modal";

interface Props {}

export const Modal2: React.FC<Props> = (props: Props) => (
  <Modal closeOnBackgroundClick>
    <div>
      <h4>Modal 2</h4>
      <Link to="?">Close Modal 2</Link>
    </div>
  </Modal>
);
