import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Page1: React.FC<Props> = (props: Props) => (
  <div>
    <h3>Page 1</h3>
    <p>Page 1 content</p>
    <Link to="?modal=modal1">Open Modal 1</Link>
  </div>
);
