import { LitElement, html, css } from "lit-element";
import "./components/fs-header";
import "./components/fs-home";
import "./components/product/fs-product";

class App extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        --spacing: 1rem;
        --border-radius: 2px;
      }
    `;
  }

  render() {
    return html`
      <fs-header></fs-header>
      <fs-product></fs-product>
      <!-- <fs-home></fs-home> -->
    `;
  }
}

customElements.define("my-app", App);
