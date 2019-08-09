import { LitElement, html, css } from "lit-element";
import "./components/fs-header";
import "./components/fs-home";

class App extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <fs-header></fs-header>
      <fs-home></fs-home>
    `;
  }
}

customElements.define("my-app", App);
