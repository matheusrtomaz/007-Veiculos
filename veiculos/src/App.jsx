import React from "react";
import logoImg from "./assets/images/logo.png";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.nome = "Matheus Rodrigues";
  }

  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-logo">
            <img src={logoImg} alt="Logo 007 Veículos" />
          </div>
          <ul className="nav-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Comprar</a>
            </li>
            <li>
              <a href="/">Vender</a>
            </li>
            <li>
              <a href="/">Onde Estamos</a>
            </li>
            <li>
              <a href="/">Sobre Nós</a>
            </li>
          </ul>
          <div className="nav-search">
            <input type="text" placeholder="Pesquisar" />
            <button>Pesquisar</button>
          </div>
        </nav>
      </header>
    );
  }
}
export default App;
