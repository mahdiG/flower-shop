import { LitElement, html, css } from "lit-element";
import router from "./router";
import "./src/components/fs-header";
import "./src/components/fs-home";
import "./src/components/product/fs-product";

class App extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    let outlet = this.shadowRoot.getElementById("outlet");
    router(outlet);
  }

  static get styles() {
    return css`
      :host {
        --spacing: 1rem;
        --border-radius: 2px;
        --box-shadow: 0px 0px 5px 0px rgb(142, 142, 142, 0.1);
        --green: rgb(107, 255, 159);
        --red: rgb(235, 52, 116);
        --gray: gray;
      }
    `;
  }

  render() {
    return html`
      <fs-header></fs-header>
      <div id="outlet"></div>
    `;
  }
}

customElements.define("fs-app", App);
