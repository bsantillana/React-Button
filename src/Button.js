import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <a
      href={props.link || "https://petstays.io/no-button-copy"}
      data-linktype="button"
      data-source-page={window.location.pathname}
      data-target-page={props.link || "/no-button-copy"}
      className={props.className}
    >
      {props.text || "Copy missing!"}
    </a>
  );
};

export default function App() {
  return (
    <div className="Button-Container">
      <Button
        className="nav-button w-button"
        link="/book-a-place"
        text="Book a Place"
      ></Button>
    </div>
  );
}
