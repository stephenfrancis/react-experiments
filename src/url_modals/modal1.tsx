import React from "react";
import { Link } from "react-router-dom";

import { Modal } from "./Modal";

interface Props {}

export const Modal1: React.FC<Props> = (props: Props) => (
  <Modal closeOnBackgroundClick>
    <div>
      <h4>Modal 1</h4>
      <Link to="?modal=modal2">Open Modal 2</Link>
    </div>
  </Modal>
);
