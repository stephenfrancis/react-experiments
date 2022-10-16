import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Page2: React.FC<Props> = (props: Props) => (
  <div>
    <h3>Page 2</h3>
    <p>Page 2 content</p>
    <Link to="?modal=modal1">Open Modal 1</Link>&nbsp;
    <Link to="?modal=modal2">Open Modal 2</Link>
  </div>
);
