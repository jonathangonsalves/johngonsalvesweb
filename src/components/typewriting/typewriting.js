// filename: Typing.js// React version: "^16.12.0"
import React from "react"; // Import the desired words
import Typed from "typed.js";

const words = [
  "Engenheiro de Dados",
  "Desenvolvedor Mobile",
  "Amante de Café",
  "Desenvolvedor Web",
  "Engenheiro da Computação",
  "Youtuber"
];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;
